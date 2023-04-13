import { Switch, Route } from 'react-router-dom';
import GameList from '../components/GameList';
import GameDetail from '../components/GameDetail';
import LoginForm from '../components/LoginForm';
import PrivateRoute from './PrivateRoute';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={GameList} />
      <PrivateRoute path="/game/:id" component={GameDetail} />
      <Route path="/login" component={LoginForm} />
    </Switch>
  );
}

export default Routes;
