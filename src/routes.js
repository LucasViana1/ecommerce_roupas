import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Product from './pages/Product';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/product" component={Product} />
    </Switch>
  );
};

export default Routes;
