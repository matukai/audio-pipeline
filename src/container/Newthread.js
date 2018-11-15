import React, { Component } from "react";
import { connect } from 'react-redux';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../index.scss";
import {getUsers , addThread} from '../action';

class Newthread extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      body: "",
      link: "",
      subgenre_id: this.props.id
    }
  }

  // componentWillMount() {
  //   this.props.getUsers()
  // }

  validateForm() {
    return this.state.title.length > 0 && this.state.body.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addThread(this.state)
    this.setState({title: "" , body: "", link: ""})
    this.reload();
  }
  
  reload () {
    this.props.func();
  }

  render() {
    return (
      <div className="Addthread">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="title" bsSize="large">
            <ControlLabel>Title</ControlLabel>
            <FormControl
              autoFocus
              value={this.state.title}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="body" bsSize="large">
            <ControlLabel>Body</ControlLabel>
            <FormControl
              value={this.state.body}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="link" bsSize="large">
            <ControlLabel>Link</ControlLabel>
            <FormControl
              value={this.state.link}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return{
     users:state.user,
     thread: state.users.lastThread
   }
 }
 
const mapDispatchToProps = dispatch =>{
  return{
   
    getUsers: () => {
      dispatch(getUsers())
    },
    addThread: (data) => {
      dispatch(addThread(data))
    }
  }
 }
 
 const ConnectedApp = connect (
   mapStateToProps,
   mapDispatchToProps
 )(Newthread)
 
 export default ConnectedApp;