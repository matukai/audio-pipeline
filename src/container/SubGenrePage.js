import React,{Component} from 'react';
import {connect} from 'react-redux';
import SubGenre from './SubGenre';

class SubGenrePage extends Component {
  constructor(props){
    super(props)
  }

  render() {
    let subGenre = this.props.genres?this.props.genres.filter((elem,idx) => {
      return elem.genre === this.props.match.params.id
    }):null

    subGenre = subGenre?subGenre[0].subgenres:null;
    return (
      <div className="subGenrePage">
        <div className="subGenreTitle">
          <h1>{this.props.match.params.id}</h1>
        </div>
        <br/>
        <br/>
        <div className="subCardBox">
          {subGenre?subGenre.map((elem,idx) => {
            return <SubGenre key={idx} s={elem} />
          }):null}
        </div>
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