import styled from 'styled-components'
import { Footer } from '../../../components/common'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 80px;
  width: 100%;
  height: 100vh;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`

export const Image = styled.div`
  position: relative;
  margin-bottom: 10px;
  div {
    background-color: ${props => props.theme.charlie};
    box-shadow: ${props => props.theme.btnShadow};
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  img {
    margin: 0 0 0px 18px;
    width: 150px;
    height: 130px;
    position: absolute;
    left: 0;
    bottom: 0;
  }
`

export const Msg = styled.div`
  padding: 10px;
  border-radius: 3px;
  max-width: 500px;
  h1 {
    margin: 0;
    font-size: ${props => props.theme.fontSize.xjumbo};
  }
  h2 {
    margin: 0 0 10px 0;
    font-size: ${props => props.theme.fontSize.large};
  }
  span {

  }
`

export const GoHome = styled.div`
  margin: 50px 0 0 0;
  a {
    border: 2px solid ${props => props.theme.currentThemeColor};
    color: ${props => props.theme.currentThemeColor};
    padding: 10px;
    border-radius: 5px;
    &:hover {
      background-color: ${props => props.theme.currentThemeColor};
      color: ${props => props.theme.alpha};
      box-shadow: ${props => props.theme.btnShadow}; 
    }
  }
`

export const Prediction = styled.div`
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

export const Foot = styled(Footer)`
  margin: auto 0 0 0;
`