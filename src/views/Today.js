import React from 'react'
import { GridWrapper, GridElement } from '../components/Grid'
import TitleBar from '../components/frontend/TitleBar'

const Today = () => {
  return(
    <>
    <TitleBar title="Today"/>
    <GridWrapper>
      <GridElement col_full>
        Content.
      </GridElement>
    </GridWrapper>
    </>
  )
}

export default Today