import React, {Component} from 'react';
import {Redirect} from 'react-router';
import {connect} from 'react-redux';
import {clickedSubGenre} from '../action';

class SubGenre extends Component {
  constructor(props){
    super(props)
    this.state = {
      toggle: false
    }
  }

  onClick () {
    this.setState({toggle: true});
    this.props.clickedSubGenre(this.props.s);
  }

  redirect () {
    if(this.state.toggle) {
      return <Redirect to={`/s/${this.props.s.id}`} />
    }
  }

  render() {
    return (
      <div  onClick={this.onClick.bind(this)}>
           {this.redirect()}
           <h1>{this.props.s.subgenre}</h1>
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
    clickedSubGenre: (data) => {
      dispatch(clickedSubGenre(data))
    }
  }
}

const ConnectedApp = connect ( 
  mapStateToProps,
  mapDispatchToProps
 )(SubGenre)

export default ConnectedApp;