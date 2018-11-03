import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {Cookies} from 'react-cookie';
class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle:false
    }
  }

  componentWillMount () {
    console.log('mount')
  }

  render () {
    console.log(this.state)
 
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">
          <img src="https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1475515256%2Fteahupoo-tasmania-waves-WAVY1016.jpg%3Fitok%3DONFppteD&w=700&q=85https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1475515256%2Fteahupoo-tasmania-waves-WAVY1016.jpg%3Fitok%3DONFppteD&w=700&q=85" width="30" height="30" alt=""/>
          Audio Pipeline
          </a>
          <div className="navBarLinks" >
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="/">Home</a>
              <a className="nav-item nav-link active" href="/login">llllllll</a>
              {this.props.loginChecker? null: <a className="nav-item nav-link active" href="/login">Login</a>   }

              {/* {this.props.loginChecker?<a className="nav-item nav-link active" href="/logout">Logout</a>:null} */}

              {/* {localStorage.User || this.props.logMeOutside? null: <a className="nav-item nav-link active" href="/register">Register</a>} */}

            </div>
          </div>
        </nav>
      </div>
    )
  }
}

const mapStateTopProps = state =>{
  // console.log(state.users)
 return{
    loginChecker: state.users.checkLogin
  }
}

const mapDispatchToProps = dispatch =>{
  // console.log(dispatch)
  return{
  
  }
}

const ConnectedApp = connect (
  mapStateTopProps,
  mapDispatchToProps
)(NavBar)

export default ConnectedApp;