import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

class Logout extends Component {
  constructor(props) {
    super(props)
  }

  logout() {
    localStorage.clear();
    axios.get('/api/logout');
  }

  render() {
    return(
      <div>
        {this.logout()}
        <Redirect to="/" />
      </div>
    )
  }
}

export default Logout;