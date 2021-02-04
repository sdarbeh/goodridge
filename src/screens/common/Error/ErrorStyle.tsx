import styled, { keyframes } from 'styled-components'

const rotate = () => keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`

export const Content = styled.div`
  &, div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  h1 {
    font-size: ${props => props.theme.fontSize.xxjumbo};
    margin: 0;  
  }

`

export const ImgContainer = styled.div`
  background-color: ${props => props.theme.bravo};
  box-shadow: ${props => props.theme.btnShadow};
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
  img {
    animation: ${props => rotate} 5s linear infinite both;
    width: 60%;
    height: 85%;
  }
`

export const Message = styled.div`
  h2 {
    font-size: ${props => props.theme.fontSize.normal};
    margin: 0 0 15px 0;
  }
  button {
    background-color: ${props => props.theme.currentThemeColor};
    font-size: ${props => props.theme.fontSize.small};
    padding: 7px 14px;
    border-radius: 30px;
  }
`

export const Contact = styled.div`
  color: ${props => props.theme.medium};
  font-size: ${props => props.theme.fontSize.xsmall};
  margin: 75px 0 0 0;
  display: grid;
  grid-template-columns: 1fr 20px;
  column-gap: 5px;
  h3 {
    margin: 0;
  }
  a:hover {
    color: ${props => props.theme.currentThemeColor};
  }
`