import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {clickedGenre} from '../action';

class Genre extends Component {
  constructor(props){
    super(props);
    this.state = {
      toggle: false
    }
  }

  onClick() {
    this.setState({toggle: true});
    this.props.clickedGenre(this.props.idvGenre)
  }

  redirect() {
    if(this.state.toggle){
      return  <Redirect to={`/g/${this.props.idvGenre.genre}`} />
    }
  }

  render() {
    return (
      <div onClick={this.onClick.bind(this)}>
      {this.redirect()}
        <h1>{this.props.idvGenre.genre}</h1>
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
    clickedGenre: (data) => {
      dispatch(clickedGenre(data))
    }
  }
}

const ConnectedApp = connect (
  mapStateToProps,
  mapDispatchToProps
)(Genre)

export default ConnectedApp;