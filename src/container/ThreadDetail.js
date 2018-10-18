import React, {Component} from 'react';
import { Redirect } from 'react-router'; 
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
      <div className="threadDetail">
        {this.props.thread? 
          <div>
            <h1>{this.props.thread.title}</h1>
            <br/>
            <p>{this.props.thread.body}</p>
            <br/>
            {this.props.thread.link ? <ReactPlayer controls url={this.props.thread.link} /> : null}
            <br/>
            <CommentForm threadId={this.props.thread.id} />
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