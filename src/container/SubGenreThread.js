import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import Thread from './Thread';
import NewThread from './Newthread';

class SubGenreThread extends Component {
  constructor(props) {
    super(props)
    this.state = {
      threads: [],
      toggle: false
    }
  }

  componentWillMount () {
    this.getThreads();
  }

  getThreads () {
    axios.get(`/api/subgenres/${this.props.match.params.id}`)
    .then(result => {
      result.data.reverse()
      this.setState({
        threads: result.data,
        toggle: true
      })
      return result;
    })
    .catch(err => {console.log(err)})
  }

  redirect() {
    return <Redirect to="/404" />
  }

  render () {
    if(this.state.toggle) {
      return (
        <div className="subGenreThread">
          <h1>Sub Genre Thread</h1>
          <NewThread func={this.getThreads.bind(this)} id={this.props.match.params.id} />
          {this.state.threads.map((elem,idx) => {
            return <Thread key={idx} thread={elem} />
          })}
        </div>
      )
    } else {
      return (
        <div>
          {/* <h1>toggle false</h1> */}
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    threads: state.threads.clickedSubGenre
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

const ConnectedApp = connect ( 
  mapStateToProps,
  mapDispatchToProps
 )(SubGenreThread)

export default ConnectedApp;