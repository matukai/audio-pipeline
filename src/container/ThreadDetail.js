import React, {Component} from 'react';
import { connect } from 'react-redux';
import { clickedThread } from '../action';
import CommentForm from './CommentForm';
import CommentContainer from './CommentContainer';
import ReactPlayer from 'react-player';

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

  render() {
    return (
      <div className="threadDetail" style={{backgroundColor:'green;'}}>
        {this.props.thread? 
          <div className="as" style={{backgroundColor:'white;'}} >
            <h1>asdfadfasdfdas</h1>
            <h1>{this.props.thread.title}</h1>
            <br/>
            <p>{this.props.thread.body}</p>
            <br/>
              <div className="threadDetailPlayer">
                {this.props.thread.link ? <ReactPlayer width="100%" controls url={this.props.thread.link} /> : null}
              </div>
            <br/>
            <span>Posted By: {this.props.thread.users.username}</span>

            {localStorage.User? <CommentForm threadId={this.props.thread.id} />:null}
            <br/>
            <CommentContainer threadId={this.props.thread.id} comments={this.props.thread.comments} />
            <br/>
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