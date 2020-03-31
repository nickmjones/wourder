import React from 'react'
import { GridWrapper, GridElement } from '../components/frontend/Grid'
import TitleBar from '../components/frontend/TitleBar'

const Logging = () => {
  return(
    <>
    <TitleBar title="Add Water" date="true" />
    <GridWrapper>
      <GridElement col_full>
      </GridElement>
    </GridWrapper>
    </>
  )
}

export default Logging