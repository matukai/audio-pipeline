import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { getUsers } from './action'
import Main from './component/Main';
// import Navbar from './container/Navbar';

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
