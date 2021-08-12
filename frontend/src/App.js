import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useContext } from "react";
import { Context } from './context/Context';

import Main from './containers/Main/Main'
import Home from './containers/Home/Home'
import Signup from './containers/Signup/Signup';
import Text from './containers/Text/Text'
import AuthPost from './containers/Text/AuthPost';
import NotAuthPost from './containers/Text/notAuthPost';
// import './App.css';

function App() {

  const {user} = useContext(Context);
  return (
    <Router>
      <Switch>
        <Route path='/sign'>
          {user ? <Home /> : <Signup />}
        </Route>
        <Route path='/:id'>
        {user ? <AuthPost /> : <NotAuthPost />}
        </Route>
        <Route path='/' exact component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
