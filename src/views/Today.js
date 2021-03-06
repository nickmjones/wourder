import React from 'react'
import { GridWrapper, GridElement } from '../components/frontend/Grid'
import TitleBar from '../components/frontend/TitleBar'
import ToolBar from '../components/frontend/ToolBar'

import Block from '../components/frontend/Block'

const Today = () => {
  return(
    <>
      <div className="viewport">
      <TitleBar title="Progress" date="true" />
      <GridWrapper>
        <GridElement col_full>
          <Block title="Today"></Block>
          <Block title="This Week"></Block>
        </GridElement>
      </GridWrapper>
      </div>
      <ToolBar />
    </>
  )
}

export default Today
