import React, { Component } from 'react';
import { connect } from 'react-redux';

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
          <div className="navBarLinks" >
              <a className="nav-item nav-link active" href="/">Home</a>
              {localStorage.User?null:<a className="nav-item nav-link active" href="/login">Login</a>}
              {localStorage.User?null:<a className="nav-item nav-link active" href="/register">Register</a>}
              {localStorage.User?<a className="nav-item nav-link active" href="/logout">Logout</a>:null}
          </div>
    )
  }
}

const mapStateTopProps = state =>{
 return{
   
  }
}

const mapDispatchToProps = dispatch =>{
  return{
  
  }
}

const ConnectedApp = connect (
  mapStateTopProps,
  mapDispatchToProps
)(NavBar)

export default ConnectedApp;