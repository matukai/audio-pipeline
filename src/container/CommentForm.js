import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { addComment } from '../action';
import axios from 'axios';
class CommentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      body: "",
      threadId: this.props.threadId
    };
  }

  validateForm() {
    return this.state.body.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addComment(this.state)
    this.setState({body: ''})
  }

  render() {
    let th = axios.get(`/api/threads/`)
    .then(result => {
      // this.setState({threads: result })
    })
    
    return (
      <div className="Addcomment">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="body" bsSize="large">
            <ControlLabel>Comment</ControlLabel>
            <FormControl
              value={this.state.body}
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
    )
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return  {
    addComment: (input) => {
      dispatch(addComment(input))
    } 
  }
}

const ConnectedApp = connect (
  mapStateToProps,
  mapDispatchToProps
)(CommentForm)

export default ConnectedApp;