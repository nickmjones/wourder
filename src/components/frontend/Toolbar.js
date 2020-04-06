import React, { Component } from 'react'
import styled from 'styled-components'

// Icons
import { FiSun } from 'react-icons/fi';
import { FiAward } from 'react-icons/fi';
import { FiPlusCircle } from 'react-icons/fi'

// Styles
const ToolbarWrapper = styled.ul `
  padding: 0;
  display: flex;
  height: var(--toolbar-element-height);
  margin: 0;
`;

const ToolbarElement = styled.li `
  list-style: none;
  flex: 1;
  text-align: center;
  height: var(--toolbar-element-height);
  line-height: calc(var(--toolbar-element-height));

  & a {
    color: var(--color-blue-dark); 
    text-decoration: none;
  }
`;


class Toolbar extends Component {

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
            <a href="/new">
              <FiPlusCircle />
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