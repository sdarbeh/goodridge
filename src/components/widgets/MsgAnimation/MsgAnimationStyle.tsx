import styled, { keyframes } from 'styled-components'

const sent = () => keyframes`
  0% {
    transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`

const recieved = () => keyframes`
  0% { 
    transform:translateX(-800px) 
    rotateY(30deg) scale(0);
    transform-origin:-100% 50%;
    opacity:0
  }
  100% {
    transform:translateX(0) rotateY(0) scale(1);
    transform-origin:1800px 50%;
    opacity:1
  }
`

const open = () => keyframes`
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
`

export const Sent = styled.span`
  animation: ${props => sent} .7s cubic-bezier(.25,.46,.45,.94) both;
`

export const Recieved = styled.span`
  animation: ${props => recieved} .7s cubic-bezier(.25,.46,.45,.94) both;
`

export const Opened = styled.span`
  animation: ${props => open} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
`