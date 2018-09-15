import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import { getUsers, recentThreads } from './action'
import Main from './component/Main';
import Navbar from './container/Navbar';
import { withRouter } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props)
  }

  componentWillMount () {
    this.props.recentThreads();
  }

  componentWillUpdate() {
    this.props.recentThreads();
  }
  
  render() {
    localStorage.setItem('Username','User1')
    return (
      <div className="App">
        {/* <Navbar /> */}
        <h1>AuDiO pIpElInE</h1>
        <div className="Main">
          <Main />
        </div>
      </div>
    );
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
    }
  }
}

const ConnectedApp = connect (
  mapStateTopProps,
  mapDispatchToProps
)(App)

export default withRouter(ConnectedApp);
