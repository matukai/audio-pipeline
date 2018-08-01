import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { getUsers } from './action'

class App extends Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.props.getUsers();
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateTopProps = state =>{
  console.log(state)
 return{
    users:state.user
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    getUsers: ()=>{
      dispatch(getUsers())
    }
  }
}


const ConnectedApp = connect (
  mapStateTopProps,
  mapDispatchToProps
)(App)

export default ConnectedApp;
