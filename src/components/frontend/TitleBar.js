import React, { Component } from 'react'
import styled from 'styled-components'
import moment from 'moment'


const TitleBarCanvas = styled.header `
  height: 96px;
  padding: 1rem;
  background: var(--color-violet);
  display: grid;
  grid-template-rows: auto;
  color: white;
`;

const TitleBarDate = styled.div`
  font-size: 15px;
  color: rgba(255,255,255,0.4);
`;
const TitleBarTitle = styled.div`
  font-size: 28px;
  font-weight: 700;
`;


class TitleBar extends Component {
  getDate() {
    var current_date = moment().format("MMMM Do")
    return current_date
  }
  render(){
    return (
      <TitleBarCanvas>
        {this.props.date === "true" ? (
          <TitleBarDate>{ this.getDate() }</TitleBarDate>
        ) : null}
        <TitleBarTitle>{this.props.title}</TitleBarTitle>
      </TitleBarCanvas>
    )
  }
}

export default TitleBar