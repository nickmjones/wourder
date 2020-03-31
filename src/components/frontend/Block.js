import React, { Component } from 'react'
import styled from 'styled-components'

const BlockCanvas = styled.div `
  background-color: var(--color-indigo);
  padding: 1rem;
  border-radius: 1rem;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }

`;

class Block extends Component {
  render() {
    return(
      <BlockCanvas>
        <h5>{this.props.title}</h5>
      </BlockCanvas>
    )
  }
}

export default Block