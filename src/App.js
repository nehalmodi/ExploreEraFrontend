import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Users from "./user/pages/Users";

const App = () => {
  return (
    <Router>
      <MainNavigation></MainNavigation>
      <main>
      <Switch>
        <Route path="/" exact>
          <Users></Users>
        </Route>
        <Route path="/places/new" exact>
          <NewPlace></NewPlace>
        </Route>
        <Redirect to="/"></Redirect>
      </Switch>
      </main>
    </Router>
  );
};

export default App;
