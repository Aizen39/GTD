import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import home from '../../pages/home';
import Profil from '../../pages/Profil';
import trending from '../../pages/trending';
import Navbar from '../NavBar';

const index = () => {
  return (
    <Router>
        <Navbar />
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/profil" exact component={Profil} />
        <Route path="/trending" exact component={trending} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default index;