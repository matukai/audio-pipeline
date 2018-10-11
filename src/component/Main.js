import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Home from '../container/Home';
import About from '../component/About';
import Login from '../container/Login';
import Register from '../container/Register';
import Newthread from '../container/Newthread'
import ThreadDetail from '../container/ThreadDetail';
import GenreContainer from '../container/GenreContainer';
import SubGenrePage from '../container/SubGenrePage';

const one = 1;

const Main = props => (
  <main className="main">
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/addpost" component={Newthread} />
      <Route exact path="/thread/:id" component={ThreadDetail} />
      <Route path="/genre" component={GenreContainer} />
      <Route exact path="/subgenre" component={SubGenrePage} />
      <Route path={`/${one}`} component={Login} />

    </Switch>
  </main>
)

export default Main;