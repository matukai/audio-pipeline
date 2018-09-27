import React, {Component} from 'react';

class Comment extends Component {
  constructor(props){
    super(props)
  }

  render(){
    // console.log(this.props)
    return (
      <div>
        <h1>{this.props.elem.body}</h1>
        {/* <h2>Posted: {this.props.elem}</h2> */}
      </div>
    )
  }

}

export default Comment;