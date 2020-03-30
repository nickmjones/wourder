import React, { Component } from 'react'
import styled from 'styled-components'


const TitleBarElement = styled.header `
  padding: 3rem 1rem 1rem;
`;

class TitleBar extends Component {

  render(){
    return (
      <TitleBarElement>
        <h1>{this.props.title}</h1>
      </TitleBarElement>
    )
  }
}

export default TitleBar