import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FirebaseContext from './contexts/FirebaseContext';
import useAuth from './hooks/useAuth';
import Home from './components/Home';
import GameList from './components/GameList';
import AddGame from './components/AddGame';
import GameDetails from './components/GameDetails';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import RandomGame from './components/RandomGame';

function App() {
  const { user, firebase } = useAuth();

  return (
    <FirebaseContext.Provider value={{ user, firebase }}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/games" component={GameList} />
          <Route path="/add-game" component={AddGame} />
          <Route path="/game/:id" component={GameDetails} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/logout" component={Logout} />
          <Route path="/random-game" component={RandomGame} />
        </Switch>
      </Router>
    </FirebaseContext.Provider>
  );
}

export default App;
