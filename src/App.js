import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import { recentThreads, getGenres } from './action'
import Header from './container/Header';
import Main from './component/Main';
import Footer from './container/Footer';
import { withRouter } from 'react-router-dom';
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
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

const mapStateTopProps = state =>{
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
