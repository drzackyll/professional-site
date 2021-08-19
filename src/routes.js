import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Resume from './components/resume';
import Work from './components/work';
import Home from './components/home';
import Blog from './components/blog';
import Contact from './components/contact';
import Portfolio from './components/portfolio';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/resume">
        <Resume />
      </Route>
      <Route path="/work">
        <Work />
      </Route>
      <Route path="/blog">
        <Blog />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/portfolio">
        <Portfolio />
      </Route>
    </Switch>
)};

export default Routes;
