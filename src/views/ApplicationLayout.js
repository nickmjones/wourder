import React, { Component } from 'react'
import Routes from '../components/Routes'
import Toolbar from '../components/frontend/Toolbar'
import Splash from '../components/frontend/Splash'

class ApplicationLayout extends Component {
  render() {
    return(
      <>
        <div className="viewport">
          <Routes />
        </div>
        <div>
          <Toolbar />
        </div>
      </>
    )
  }
}

export default ApplicationLayout
