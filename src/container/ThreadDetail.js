import React, {Component} from 'react';
import { Redirect } from 'react-router'; 
import { connect } from 'react-redux';
import { clickedThread } from '../action';
import Comment from './Comment';
import CommentForm from './CommentForm';
class ThreadDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loadThread: null,
      comments: null
    }
  }

  componentWillMount() {
    this.props.clickedThread(this.props.match.params.id)
  }

  componentWillReceiveProps() {
    // console.log(this.props)
  }


  
  componentWillUnmount() {
    // console.log('here')
    this.props.thread?this.setState({comments: this.props.thread}):null

  }

  render() {
    // console.log(this.props.thread)
    return (
      <div className="threadDetail">
        {this.props.thread? 
          <div> 
            <h1>{this.props.thread.title}</h1>
            <br/>
            <p>{this.props.thread.body}</p>
            <br/>

            <CommentForm threadId={this.props.thread.id} />
            {this.props.thread.comments.map((elem,idx) => {
              return <Comment key={idx} elem={elem} />
            })}
            </div>
          :null}
       <br/>
     </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    thread: state.threads.clickedThread,
    addComment: state.threads.addComment
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clickedThread: (id) => {
      dispatch(clickedThread(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThreadDetail);