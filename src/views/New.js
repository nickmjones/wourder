import React, { Component } from 'react'
import styled from 'styled-components'
import { GridWrapper, GridElement } from '../components/frontend/Grid'
import Button from '../components/frontend/Button'
import TitleBar from '../components/frontend/TitleBar'
import ToolBar from '../components/frontend/ToolBar'

const LoggingPanelCanvas = styled.div `
  background-color: var(--color-indigo);
  position: absolute;
  min-height: 343px;
  bottom: calc(59px + 1rem);
  left: 1rem;
  border-radius: 1rem;
  width: calc(100vw - 2rem);
  padding: 1rem;
`;

const LoggingPanelElement = styled.div `
  font-size: 17px;
  line-height: 20px;
  color: white;
  padding: 1rem;
  border-radius: .5rem;

  &:not(:last-child){
    margin-bottom: 1rem;
  }
`;

class LoggingPanel extends Component {

  render(){
    return(
      <LoggingPanelCanvas>
        <LoggingPanelElement>8 ounces</LoggingPanelElement>
        <LoggingPanelElement>16 ounces</LoggingPanelElement>
        <LoggingPanelElement>32 ounces</LoggingPanelElement>
        <Button>Log Amount</Button>
      </LoggingPanelCanvas>
    )
  }

}

const New = () => {
  return(
    <>
      <div className="viewport">
        <TitleBar title="Log Water" date="true" />
        <GridWrapper>
          <GridElement col_full>
            <LoggingPanel />
          </GridElement>
        </GridWrapper>
      </div>
      <ToolBar/>
    </>
  )
}

export default New