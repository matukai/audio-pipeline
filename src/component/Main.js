import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../container/Home';
import About from '../component/About';
import Login from '../container/Login';

const Main = props => (
  <main className="main">
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </main>
)

export default Main;