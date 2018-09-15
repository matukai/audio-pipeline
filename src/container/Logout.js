import React, { Component } from 'react';

class Logout extends Component {
  constructor(props) {
    super(props);
  }

  onClick() {
    localStorage.clear();
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