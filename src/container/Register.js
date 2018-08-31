import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../index.css';
import { registerUser } from '../action/index';

class Register extends Component {
  constructor (props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      email: ''
    }
  }

  validateForm () {
    return this.state.username.length > 0 && this.state.password.length > 0 && this.state.email.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    let newUser = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    }
    this.props.registerUser(newUser)
  }

  render() {
    console.log('RRRR STATE',this.state)
    return (
      <div className="Register">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bsSize="large">
            <ControlLabel>Username</ControlLabel>
            <FormControl
              autoFocus
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              autoFocus
              value={this.state.password}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Register
          </ Button>
        </form>
      </div>
    )
  }

}

const mapStateToProps = state => {
  console.log(state)
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    registerUser: (user) => {
      dispatch(registerUser(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);