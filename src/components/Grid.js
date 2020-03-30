import styled, { css } from 'styled-components'

const GridWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: auto;
`;

const GridElement = styled.div `
  padding: 1rem;
  overflow: hidden;

  ${props => props.col_full && css`
    flex: 0 100%;
  `}

  ${props => props.col_half && css`
    flex: 0 50%;
  `}

  ${props => props.col_twothird && css`
    flex: 0 66%;
  `}

  ${props => props.col_third && css`
    flex: 0 33.333%;
  `}

  ${props => props.col_quarter && css`
    flex: 0 25%;
  `}
`;

export { GridWrapper, GridElement }