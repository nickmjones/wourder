import React, { Component } from 'react'
import styled from 'styled-components'
import { FiHome } from 'react-icons/fi';
import { FiPlusCircle } from 'react-icons/fi';
import { FiShield } from 'react-icons/fi';

// Styles
const ToolbarWrapper = styled.div `
  background: var(--color-violet);
  display: flex;
  height: 4rem;
`;

const ToolbarElement = styled.div `
  padding: 1rem;
  flex: 1;
  text-align: center;
  line-height: 2.2rem;

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
              <FiHome />
            </a>
          </ToolbarElement>
          <ToolbarElement>
            <a href="/logging">
              <FiPlusCircle />
            </a>
          </ToolbarElement>
          <ToolbarElement>
            <a href="/leaderboard">
              <FiShield />
            </a>
          </ToolbarElement>
        </ToolbarWrapper>
      </>
    )
  }
}

export default Toolbar