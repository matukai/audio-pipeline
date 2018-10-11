import React, { Component } from 'react';
import { connect } from 'react-redux';
import Thread from './Thread';
import '../App.css'
import Genre from './GenreContainer';
class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // console.log('HOME PROPS',this.props)
    return (
      <div className="Home">
        <h1>HoMePaGe</h1>
        <br/>

        {/* <iframe width="420" height="315"
          src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe>
        
        <audio  src="https://soundcloud.com/lil-baby-4pf/drip-too-hard" controls autoPlay/>
        <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/499015278&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe> */}

        <Genre/>
        <div className="threadBox">
         {this.props.recentThreads?this.props.recentThreads.map((elem,idx)=> { 
          return <Thread thread={elem} key={idx}  />
          } ):null }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    recentThreads: state.threads.recentThreads
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);