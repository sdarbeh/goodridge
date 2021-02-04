import styled, { keyframes } from 'styled-components'
import { device } from '../../../../utils/constants/mediaQueries'

const slideFromBottom = () => keyframes`
    0% {
        transform: translateY(100px);
    }
    100% {
        transform: translateY(0);
    }
`

export const Container = styled.div`
    animation: ${props => slideFromBottom} 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 101;
    display: flex;
    align-items: center;
    justify-content: center;
    @media ${device.tablet} { 
        padding-bottom: 30px;
    }
`

export const Content = styled.div`
    background-color: ${props => props.theme.bravo};
    box-shadow: ${props => props.theme.btnShadow};
    overflow-y: auto;
    border-radius: 10px 10px 0 0;
    width: 95%;
    height: 100%;
    max-width: 400px;
    @media ${device.tablet} { 
        border-radius: 10px;
    }
`