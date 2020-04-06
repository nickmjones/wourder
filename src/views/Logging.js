import React from 'react'
import { GridWrapper, GridElement } from '../components/frontend/Grid'
import TitleBar from '../components/frontend/TitleBar'
import ToolBar from '../components/frontend/ToolBar'

const Logging = () => {
  return(
    <>
      <div className="viewport">
        <TitleBar title="Add Water" date="true" />
        <GridWrapper>
          <GridElement col_full>
            Content.
          </GridElement>
        </GridWrapper>
      </div>
      <ToolBar />
    </>
  )
}

export default Logging