import React, {Component} from 'react';
import Comment from './Comment';
import axios from 'axios';

class CommentContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: []
    }
  }

  componentWillReceiveProps() {
    this.getComments()
  }

  getComments() {
    let comments = axios.get('/api/threads/24').then(result => {
      this.setState({comments:result})
      return result;
    }).catch(err => {console.log(err)})
  }

  render() {
    return (
      <div>
        {this.state.comments.data?this.state.comments.data.comments.map((elem,idx) => {
          return <Comment key={idx} elem={elem} />
        }):this.props.comments.map((elem,idx) => {
          return  <Comment key={idx} elem={elem} />
        })}
      </div>
    )
  }
}

export default CommentContainer;