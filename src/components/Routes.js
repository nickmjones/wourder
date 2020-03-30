import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Security, LoginCallback } from '@okta/okta-react';

// Views
import Home from '../views/Home'
import Today from '../views/Today'
import Leaderboard from '../views/Leaderboard'
import Logging from '../views/Logging'
import NotFound from '../views/NotFound'

const config = {
  clientId: '0oa52dqvnIAhCdok04x6',
  issuer: 'https://dev-598974.okta.com/oauth2/default',
  redirectUri: 'http://localhost:3000/implicit/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true
};

// Okta redirect URL
const CALLBACK_PATH = '/implicit/callback';

class Routes extends Component {
  render(){
    return(
      <BrowserRouter>
        <Security {...config} >
          <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/today" exact component={ Today } />
            <Route path={ CALLBACK_PATH } exact component={LoginCallback} />
            <Route path="/leaderboard" exact component={ Leaderboard } />
            <Route path="/logging" exact component={ Logging } />
            <Route path="/" component={ NotFound } />
          </Switch>
          </Security>
      </BrowserRouter>
    )
  }
}

// exports Routes class
export default Routes
