import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Views
import Home from '../views/Home'
import New from '../views/New'
import Today from '../views/Today'
import Leaderboard from '../views/Leaderboard'
import Logging from '../views/Logging'
import NotFound from '../views/NotFound'

class Routes extends Component {
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/new" exact component={ New } />
          <Route path="/today" exact component={ Today } />
          <Route path="/leaderboard" exact component={ Leaderboard } />
          <Route path="/logging" exact component={ Logging } />
          <Route path="/" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    )
  }
}

// exports Routes class
export default Routes
