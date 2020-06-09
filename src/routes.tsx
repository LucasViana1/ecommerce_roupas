import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/product/:id" component={Product} />
  </Switch>
);

export default Routes;
