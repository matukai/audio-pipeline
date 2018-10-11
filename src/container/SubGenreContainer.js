import React,{Component} from 'react';
import {connect} from 'react-redux';

class SubGenreContainer extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <h1></h1>
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
  )(SubGenreContainer)

export default ConnectedApp;