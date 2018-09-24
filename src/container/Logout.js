import React, { Component } from 'react';
import axios from 'axios';

class Logout extends Component {
  constructor(props) {
    super(props);
  }

  onClick() {
    localStorage.clear();
    axios.get('/api/logout');
  }

  render() {
    return(
      <div>
        <button onClick={this.onClick.bind(this)} type="button">Logout</button>
      </div>
    )
  }
}

export default Logout;