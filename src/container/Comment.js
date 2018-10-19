import React, {Component} from 'react';
import {connect} from 'react-redux';

class Comment extends Component {
  // constructor(props){
  //   super(props)
  // }

  render(){
    return (
      <div>
        <h1>{this.props.elem.body}</h1>
        <h2>Posted: {this.props.elem.users.username}</h2>
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

  }
}

const ConnectedApp = connect (
  mapStateToProps,
  mapDispatchToProps
)(Comment)

export default ConnectedApp;