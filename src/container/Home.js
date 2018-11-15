import React, { Component } from 'react';
import { connect } from 'react-redux';
import Thread from './Thread';
import '../App.css'
import Genre from './GenreContainer';
import TestComponent from './testComponent';

class Home extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    // console.log('HOME PROPS',this.props)
    return (
      <div className="Home">
      <br/>
        <TestComponent />
      <br/>

        <h1>HoMePaGe</h1>
        <br/>
        <Genre/>
        <div className="threadBox">
         {this.props.recentThreads?this.props.recentThreads.map((elem,idx)=> { 
          return <Thread thread={elem} key={idx}  />
          } ):null }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    recentThreads: state.threads.recentThreads
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);