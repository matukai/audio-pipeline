import React, { Component } from 'react';

class TestComponent extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="testParent">
        <div className="testChild">
          <h1>Under Construction</h1>
        </div>
      </div>
    )
  }
}

export default TestComponent;