import React from 'react'
import { GridWrapper, GridElement } from '../components/frontend/Grid'
import TitleBar from '../components/frontend/TitleBar'

const Leaderboard = () => {
  return(
    <>
    <TitleBar title="Leaderboard" date="true" />
    <GridWrapper>
      <GridElement col_full>
        Content.
      </GridElement>
    </GridWrapper>
    </>
  )
}

export default Leaderboard