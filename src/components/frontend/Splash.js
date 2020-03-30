import React from 'react'
import styled from 'styled-components'

const SplashScreen = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: red;
  z-index: 999;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const Splash = () => {
  return(
    <SplashScreen>
      Hello!
    </SplashScreen>
  )
}

export default Splash