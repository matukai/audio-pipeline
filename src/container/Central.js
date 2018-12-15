import React, {Component} from 'react';
import Main from '../component/Main';
import SideBar from '../container/SideBar';

class Central extends Component {
  constructor(props){
    super(props)
  }
  
  render() {
    console.log('central')
    return (
      <div className="central">
        <Main />
        <SideBar />
      </div>
    )
  }
}

export default Central;