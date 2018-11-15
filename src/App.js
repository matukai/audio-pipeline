import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import { recentThreads, getGenres } from './action'
import Main from './component/Main';
import Navbar from './container/Navbar';
import { withRouter } from 'react-router-dom';
import Logout from './container/Logout';
import {checkLogin} from './action/index';
class App extends Component {
    constructor(props){
      super(props)
      this.state = {
        log: false
      }
    }

  componentWillMount () {
    this.props.recentThreads();
    this.props.getGenres();
    this.props.checkLogin();
  }

  componentWillUpdate() {
    this.props.recentThreads();
  }
  
  render() {
    // console.log(this.state)
    // console.log('APP PROPS',this.props)
    return (
      <div className="App">
        <Navbar />
        <h1>AuDiO pIpElInE</h1>
        <div className="Main">
        <Main />
        </div>
      </div>
    )
  }
}

const mapStateTopProps = state =>{
  // console.log('APP STATE',state)
 return{
    users:state.user
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    recentThreads: ()=>{
      dispatch(recentThreads())
    },
    getGenres: () => {
      dispatch(getGenres())
    },
    checkLogin: () => {
      dispatch(checkLogin())
    }
  }
}

const ConnectedApp = connect (
  mapStateTopProps,
  mapDispatchToProps
)(App)

export default withRouter(ConnectedApp);
