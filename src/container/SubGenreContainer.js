import React,{Component} from 'react';
import {connect} from 'react-redux';
import SubGenre from './SubGenre';
class SubGenreContainer extends Component {
  constructor(props){
    super(props)
  }
  
  render() {
    return (
      <div>
        <h1>sub genre container</h1>
        {this.props.sub?this.props.sub.map((elem,idx) => {
          return <SubGenre key={idx} s={elem} />
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