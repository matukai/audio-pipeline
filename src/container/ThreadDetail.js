import React, {Component} from 'react';
import { Redirect } from 'react-router'; 
import { connect } from 'react-redux';
import { clickedThread } from '../action';

class ThreadDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loadThread: null
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
            </div>
          :null}
       <br/>
     </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    thread: state.threads.clickedThread
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