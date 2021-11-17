import { Route, Switch } from 'react-router-dom';

import { HomePage } from '../pages/HomePage';
import { MoviesPage } from '../pages/MoviesPage';

export function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/movies">
        <MoviesPage />
      </Route>
    </Switch>
  );
}
