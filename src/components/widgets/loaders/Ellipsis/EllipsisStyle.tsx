import styled, { keyframes } from 'styled-components'

const ellipsis1  = () => keyframes`
    0% { transform: scale(0)}
    100% { transform: scale(1)}
`

const ellipsis2  = () => keyframes`
    0% { transform: translate(0, 0)}
    100% { transform: translate(24px, 0)}
`

const ellipsis3  = () => keyframes`
    0% { transform: scale(1)}
    100% { transform: scale(0)}
`

export const Ellipsis = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    div {
        background: ${props => props.theme.currentThemeColor};
        box-shadow: ${props => props.theme.btnShadow};
        position: absolute;
        top: 33px;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }
    div:nth-child(1) {
        left: 8px;
        animation: ${props => ellipsis1} 0.6s infinite;
    }
    div:nth-child(2) {
        left: 8px;
        animation: ${props => ellipsis2} 0.6s infinite;
    }
    div:nth-child(3) {
        left: 32px;
        animation: ${props => ellipsis2} 0.6s infinite;
    }
    div:nth-child(4) {
        left: 56px;
        animation: ${props => ellipsis3} 0.6s infinite;
    }
`