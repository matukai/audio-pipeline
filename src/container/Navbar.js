import React, { Component } from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: false
    }
  }

  isLoggedIn () {
    console.log('loggg')
    // if(localStorage.User){
    //   this.setState({
    //     toggle: true
    //   })
    // }
    this.forceUpdate()
    console.log('here')
  }

  render () {
    return (
      <div>
        {/* {localStorage.User?this.setState({toggle:true}):null} */}
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">
          <img src="https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1475515256%2Fteahupoo-tasmania-waves-WAVY1016.jpg%3Fitok%3DONFppteD&w=700&q=85https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1475515256%2Fteahupoo-tasmania-waves-WAVY1016.jpg%3Fitok%3DONFppteD&w=700&q=85" width="30" height="30" alt=""/>
          Audio Pipeline
          </a>
          <div className="navBarLinks" >
            <div className="navbar-nav">
            <button onClick={this.isLoggedIn.bind(this)}></button>
              <a className="nav-item nav-link active" href="/">Home</a>

              {localStorage.User? null: <a className="nav-item nav-link active" href="/login">Login</a>   }

              <a className="nav-item nav-link active" href="/logout">Logout</a>

              {localStorage.User? null: <a className="nav-item nav-link active" href="/register">Register</a>}
              
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar;