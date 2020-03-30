import React from 'react'
import { GridWrapper, GridElement } from '../components/Grid'
import TitleBar from '../components/frontend/TitleBar'

const Leaderboard = () => {
  return(
    <>
    <TitleBar title="Leaderboard"/>
    <GridWrapper>
      <GridElement col_full>
        Content.
      </GridElement>
    </GridWrapper>
    </>
  )
}

export default Leaderboard