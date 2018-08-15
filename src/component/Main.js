import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../container/Home';
import About from '../component/About';

const Main = props => (
  <main className="main">
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About} />
    </Switch>
  </main>
)

export default Main;