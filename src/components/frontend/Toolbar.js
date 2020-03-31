import React, { Component } from 'react'
import styled from 'styled-components'
import { FiSun } from 'react-icons/fi';
import { FiXSquare } from 'react-icons/fi';
import { FiAward } from 'react-icons/fi';

// Styles
const ToolbarWrapper = styled.div `
  display: flex;
  height: 49px;
  border-radius: 20px;
`;

const ToolbarElement = styled.div `
  flex: 1;
  text-align: center;
  line-height: 49px;

  & a {
    color: var(--color-blue-dark); 
    text-decoration: none;
  }
`;

class Toolbar extends Component {

  constructor(props){
    super(props);
    this.state = {
      isMenuOpen: false
    }
  }

  componentDidMount(){}

  render(){
    return(
      <>
        <ToolbarWrapper>
          <ToolbarElement>
            <a href="/today">
              <FiSun />
            </a>
          </ToolbarElement>
          <ToolbarElement>
            <a href="/logging">
              <FiXSquare />
            </a>
          </ToolbarElement>
          <ToolbarElement>
            <a href="/leaderboard">
              <FiAward />
            </a>
          </ToolbarElement>
        </ToolbarWrapper>
      </>
    )
  }
}

export default Toolbar