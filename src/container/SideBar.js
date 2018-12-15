import React, {Component} from 'react';
import {connect} from 'react-redux';
import GenreContainer from './GenreContainer';
import Footer from './Footer';

class SideBar extends Component {
  constructor(props){
    super(props)
  }
  
  render() {
    console.log('sidebar')
    return (
      <div className="sideBar">
        <GenreContainer />
        <Footer />
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
)(SideBar)

export default ConnectedApp;