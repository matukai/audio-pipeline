import React, { Component } from "react";
import { connect } from 'react-redux';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../index.css";
import { getUsers, loginUser } from '../action/index';
import { Redirect } from 'react-router';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    let data = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.loginUser(data)
  }
  
  render() {
    console.log(this.props)
    if(localStorage.User){
      return (
        <Redirect to="/" />
      )
    }
    if(this.props.loggedUser){
      return (
        <Redirect to="/" />
      )
    }
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bsSize="large">
            <ControlLabel>Username</ControlLabel>
            <FormControl
              autoFocus
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return{
     users:state.user,
     loggedUser: state.users.loggedUser
   }
 }
 
const mapDispatchToProps = dispatch =>{
  return{
    loginUser: (user)=>{
      dispatch(loginUser(user))
    },
    getUsers: () => {
      dispatch(getUsers())
    }
  }
 }
 
 const ConnectedApp = connect (
   mapStateToProps,
   mapDispatchToProps
 )(Login)
 
 export default ConnectedApp;