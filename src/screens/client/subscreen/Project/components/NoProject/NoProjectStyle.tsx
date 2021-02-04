import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: ${props => props.theme.fontSize.normal}!important;
    text-transform: none!important;
  }
  div {

  }
`

export const BestMatches = styled.div`

`

export const Match = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  button {
    background-color: ${props => props.theme.currentThemeColorHover};
    padding: 2px 5px;
    border-radius: 4px;
    font-weight: 700;
  }
`

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div {
    font-size: ${props => props.theme.fontSize.small};
    margin-bottom: 5px;
  }
`