import styled, { keyframes } from 'styled-components'
import { CenterDiv } from '../../widgets'

const fadein = () => keyframes`
 0% {
    opacity: 0;
  }
  100% {
    opacity: .3;
  }
`

const spin = () => keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`

const expand = () => keyframes`
 0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`

export const EndMessage = styled(CenterDiv)`
  animation: ${props => fadein} 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  font-size: ${props => props.theme.fontSize.xsmall};
  margin: 20px 0;
  div {
    display: grid;
    grid-template-columns: 20px 1fr;
    column-gap: 10px;
  }
`

export const Refresh = styled(CenterDiv)`
  animation: ${props => expand} 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  font-size: ${props => props.theme.fontSize.xsmall};
  margin: 10px;
  opacity: .6;
  div:nth-child(1) {
    display: grid;
    grid-template-columns: 1fr 15px;
    column-gap: 10px;
  }
  svg {
    width: 100%;
    animation: ${props => spin} 2.5s linear infinite reverse;
  }
`