import {Route, Switch } from 'react-router-dom';
import Loader from 'app/components/loader';
import React from 'react';
import Header from '../containers/header/index';
import Home from 'app/pages/home';
import Footer from 'app/containers/footer';

const Router = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Header />
      <Switch>
      <Route to = {'/home'} exact component={Home}/>
      </Switch>
      <Footer/>
    </React.Suspense>
  );
};

export default Router;
