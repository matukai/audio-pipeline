import React, { Component } from 'react';
import { connect } from 'react-redux';
import Thread from './Thread';
import '../App.css'
class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="Home">
        <h1>HoMePaGe</h1>
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