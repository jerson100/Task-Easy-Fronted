import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../../views/Home";
import NotFound from "../../common/NotFound";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/" exact component={Home} />
        <Route path="" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
