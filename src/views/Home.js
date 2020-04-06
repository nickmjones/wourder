import React from 'react'
import { GridWrapper, GridElement } from '../components/frontend/Grid'
import TitleBar from '../components/frontend/TitleBar'

const Home = () => {
  return(
    <>
      <div className="viewport">
        <TitleBar title="Home" date="true" />
        <GridWrapper>
          <GridElement col_full>
            Content.
          </GridElement>
        </GridWrapper>
      </div>
    </>
  )
}

export default Home