import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import GameList from './components/GameList';
import GameDetail from './components/GameDetail';
import Login from './components/Login';

import { AuthProvider } from './contexts/AuthContext';
import { GameProvider } from './contexts/GameContext';

class App extends React.Component {
  render() {
    return (
      <Router>
        <AuthProvider>
          <GameProvider>
            <div className="App">
              <Navbar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/games" component={GameList} />
                <Route path="/game/:id" component={GameDetail} />
                <Route path="/login" component={Login} />
              </Switch>
            </div>
          </GameProvider>
        </AuthProvider>
      </Router>
    );
  }
}

export default App;
