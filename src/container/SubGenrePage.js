import React,{Component} from 'react';
import {connect} from 'react-redux';
import SubGenreContainer from './SubGenreContainer';

class SubGenrePage extends Component {
  constructor(props){
    super(props)
  }

  render() {
    let a = this.props.genres?this.props.genres.filter((elem,idx) => {
      return elem.genre === this.props.match.params.id
    }):null
    a = a?a[0].subgenres:null;
    return (
      <div>
        <h1>SubGenre Page</h1>
        {/* <h1>{this.props.subgenre.genre}</h1> */}
        <h1>LIST OF SUB GENRES</h1>
        <SubGenreContainer sub={a} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    subgenre: state.threads.clickGenre,
    genres: state.threads.genres
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