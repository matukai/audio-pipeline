import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from '../container/Home';
import About from '../component/About';
import Login from '../container/Login';
import Register from '../container/Register';
import Newthread from '../container/Newthread'
import ThreadDetail from '../container/ThreadDetail';
import GenreContainer from '../container/GenreContainer';
import SubGenrePage from '../container/SubGenrePage';

// class Main extends Component {
//   constructor(props){
//     super(props)
//   }

//   render(){
//     console.log(this.props)
//     return(
//       <div>
//           <main className="main">
//     <Switch>
//       <Route exact path="/" component={Home}/>
//       <Route exact path="/about" component={About} />
//       <Route exact path="/login" component={Login} />
//       <Route exact path="/register" component={Register} />
//       <Route exact path="/addpost" component={Newthread} />
//       <Route exact path="/thread/:id" component={ThreadDetail} />
//       <Route exact path="/g" component={GenreContainer} />
//       <Route exact path="/subgenre" component={SubGenrePage} />
//     </Switch>
//   </main>
//       </div>
//     )
//   }
// }

// const mapStateToProps = state => {
//   // console.log(state.threads.clickGenre)
//   return {
//     // genre: state.threads.clickGenre
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {

//   }
// }

// const ConnectedApp = connect (
//   mapStateToProps,
//   mapDispatchToProps
// )(Main)

// export default ConnectedApp;

const Main = props => (
  <main className="main">
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/addpost" component={Newthread} />
      <Route exact path="/thread/:id" component={ThreadDetail} />
      <Route exact path="/g" component={GenreContainer} />
      <Route exact path="/subgenre" component={SubGenrePage} />
      <Route exact path="/g/:id" component={SubGenrePage} />
    </Switch>
  </main>
)

export default Main;