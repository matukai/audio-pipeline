import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {clickedGenre} from '../action';

class Genre extends Component {
  constructor(props){
    super(props)
    this.state = {
      toggle: false,
      // disGenre: props.idvGenre.genre,
      prevGenre: null
    }
    // console.log(props.idvGenre.genre)
  }

  onClick() {
    // console.log('click')
    // console.log(this.props.idvGenre)
    this.setState({toggle: true})
    this.props.clickedGenre(this.props.idvGenre)
    return  <Redirect to={`/g/${this.props.idvGenre.genre}`} />

    // console.log(this.props.target)
    // if(this.props.target === this.props.idvGenre){
    //   console.log('same')
    //   this.setState({toggle:false})
    // }else{
    //   this.setState({toggle: true, prevGenre: this.props.idvGenre});
    //   this.props.clickedGenre(this.props.idvGenre)

    // }
  }
  
  redirect() {
    // console.log('redirect')
    // if(this.state.toggle){
    //   return  <Redirect to={`/g/${this.props.idvGenre.genre}`} />
    // }
  }

  render() {
    // console.log('render',this.state.disGenre)
    return (
      <div onClick={this.onClick.bind(this)}>
      {this.redirect()}
        {this.props.idvGenre?<h1>{this.props.idvGenre.genre}</h1>:null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log(state)
  return {
    target:state.threads.clickGenre
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