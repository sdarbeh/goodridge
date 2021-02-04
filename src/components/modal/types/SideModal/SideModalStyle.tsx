import styled, { keyframes } from 'styled-components'

const slideFromLeft = keyframes`
    0% { transform: translateX(-100px); }
    100% { transform: translateY(0); }
`

export const Content = styled.div`
    background-color: ${props => props.theme.bravo};
    color: ${props => props.theme.charlie};
    position: fixed;
    top: 0;
    left: 0;
    padding: 15px;
    width: calc(100% - 40px - 30px - 100px);
    height: calc(100% - 30px);
    z-index: 100;
    animation: ${props => slideFromLeft} 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    max-width: calc(275px - 30px);
`