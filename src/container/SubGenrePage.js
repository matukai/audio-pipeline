import React,{Component} from 'react';
import {connect} from 'react-redux';
import SubGenreContainer from './SubGenreContainer';

class SubGenrePage extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <h1>SubGenre Page</h1>
        <h1>{this.props.subgenre.genre}</h1>
        <h1>LIST OF SUB GENRES</h1>
        <SubGenreContainer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    subgenre: state.threads.clickGenre
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

const ConnectedApp = connect (
  mapStateToProps,
  mapDispatchToProps
  )(SubGenrePage)

export default ConnectedApp;