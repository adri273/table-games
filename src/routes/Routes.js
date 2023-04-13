import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import GameForm from './components/GameForm';
import GameList from './components/GameList';
import GameDetails from './components/GameDetails';
import RandomGame from './components/RandomGame';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute path="/logout" component={Logout} />
      <PrivateRoute path="/add-game" component={GameForm} />
      <PrivateRoute path="/games" component={GameList} />
      <PrivateRoute path="/game/:id" component={GameDetails} />
      <PrivateRoute path="/random-game" component={RandomGame} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
