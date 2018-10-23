import React, {Component} from 'react';
import {getGenres} from '../action';
import  {connect} from 'react-redux';
import Genre from './Genre';
class GenreContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // this.props.getGenres()
  }

  render() {
    return (
      <div>
        {this.props.genres?this.props.genres.map((elem,idx) => {
        return <Genre idvGenre={elem} key={idx}/>
        }):null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    genres: state.threads.genres
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getGenres: () => {
      dispatch(getGenres())
    }
  }
}

const ConnectedApp = connect (
  mapStateToProps,
  mapDispatchToProps
)(GenreContainer)

export default ConnectedApp;