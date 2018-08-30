import React, { Component } from 'react';

class NavBar extends Component {

  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="/">
          <img src="https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1475515256%2Fteahupoo-tasmania-waves-WAVY1016.jpg%3Fitok%3DONFppteD&w=700&q=85" width="30" height="30" alt=""/>
          Audio Pipeline
          </a>
          <div >
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
              <a class="nav-item nav-link" href="/login">Login</a>
              <a class="nav-item nav-link disabled" href="/disabled">disabled</a>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar;