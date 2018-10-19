import React, { Component } from 'react';

class NavBar extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render () {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">
          <img src="https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1475515256%2Fteahupoo-tasmania-waves-WAVY1016.jpg%3Fitok%3DONFppteD&w=700&q=85" width="30" height="30" alt=""/>
          Audio Pipeline
          </a>
          <div className="navBarLinks" >
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
              <a className="nav-item nav-link" href="/login">Login</a>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar;