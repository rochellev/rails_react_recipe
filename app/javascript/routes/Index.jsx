import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import RecipeList from "../components/RecipeList";
import Recipe from "../components/Recipe";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/recipes" exact component={RecipeList} />
      <Route path="/recipe/:id" exact component={Recipe} />
    </Switch>
  </Router>
);