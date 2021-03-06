import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../container/Home';
import About from '../component/About';
import Login from '../container/Login';
import Logout from '../container/Logout';
import Register from '../container/Register';
import Thread from '../container/Thread';
import ThreadDetail from '../container/ThreadDetail';
import GenreContainer from '../container/GenreContainer';
import SubGenrePage from '../container/SubGenrePage';
import NoMatch from './NoMatch';
import SubGenreThread from '../container/SubGenreThread';

const Main = props => (
  <main className="main">
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/thread/:id" component={ThreadDetail} />
      <Route exact path="/g" component={GenreContainer} />
      <Route exact path="/subgenre" component={SubGenrePage} />
      <Route exact path="/g/:id" component={SubGenrePage} />
      <Route exact path="/s/:id" component={SubGenreThread} />
      <Route exact path="/404" component={NoMatch} />
      <Route component={NoMatch} />
    </Switch>
  </main>
)

export default Main;