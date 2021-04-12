import React from 'react';
import { Redirect } from 'react-router-dom';
import {Home} from './components/Home'
import {Login} from './Login'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Routes = () => {
  return (
    <Router>
        <Login />
    <Switch>
      <Route path="/Home">
        <Home />
      </Route>
    </Switch>
  </Router>
  );
};

export default Routes;