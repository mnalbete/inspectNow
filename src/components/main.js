import React from 'react';
import { Switch, Route } from 'react-router-dom';

import condo from './condo';
import list from './list';

const Main = () => (
  <Switch>
    <Route exact path="/" component={condo} />
    <Route path="/aboutme" component={list} />

  </Switch>
)

export default Main;