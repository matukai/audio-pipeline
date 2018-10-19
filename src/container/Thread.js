import React, {Component} from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { clickedThread } from '../action';
import ReactPlayer from 'react-player';

class Thread extends Component {
  constructor(props) {
    super(props)

    this.state = {
      toggle: false
    }
  }

  onClick () {
    this.setState({
      toggle: true
    })
    this.props.clickedThread(this.props.thread.id)
  }

  redirect () {
    if(this.state.toggle) {
    return <Redirect to={`/thread/${this.props.thread.id}`} />
    }
  }

  linkChecker () {

  }

  render() {
    return (
      <div className="thread" onClick={this.onClick.bind(this)}>
        {this.redirect()}
        <h1>{this.props.thread.title}</h1>
        <h1>{this.props.thread.body}</h1>
        {this.props.thread.link ? <ReactPlayer controls url={this.props.thread.link} /> : null}
        <br/>  
     </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clickedThread: (id) => {
      dispatch(clickedThread(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Thread);