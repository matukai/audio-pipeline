import React, {Component} from 'react';
import Navbar from './Navbar';
class Header extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="header">
        <a className="headerLogo" href="/">
          <img src="https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1475515256%2Fteahupoo-tasmania-waves-WAVY1016.jpg%3Fitok%3DONFppteD&w=700&q=85https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1475515256%2Fteahupoo-tasmania-waves-WAVY1016.jpg%3Fitok%3DONFppteD&w=700&q=85" width="30" height="30" alt=""/>
        <span className="headerTitle">Audio Pipeline</span>


        </a>
        <Navbar />
      </div>
    )
  }
}

export default Header;