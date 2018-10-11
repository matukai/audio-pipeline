import React,{Component} from 'react';
import {connect} from 'react-redux';

class SubGenreContainer extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        {this.props.sub?this.props.sub.map((elem,idx) => {
          return <h1>{elem.subgenre}</h1>
        }):null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

const ConnectedApp = connect (
  mapStateToProps,
  mapDispatchToProps
  )(SubGenreContainer)

export default ConnectedApp;