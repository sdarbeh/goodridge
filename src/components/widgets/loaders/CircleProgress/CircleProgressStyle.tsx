import styled, { keyframes } from 'styled-components'

interface container {
    size: number
}

interface track {
    time: number
}

interface fill {
    color: string
}

const animation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(180deg);
    }
`

export const Container = styled.div`
    width: ${(props:container) => props.size}px;
    height: ${(props:container) => props.size}px;
    position: relative;
`

export const Track = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    clip: rect(0px, 50px, 50px, 25px);
    border-radius: 100%;
    background-color: ${props => props.theme.alpha};
    &.left div {
        animation: ${(props:track) => animation} ${props => props.time}s linear;
    }
    &.right {
        z-index: 3;
        transform: rotate(180deg);
        & div {
            animation: ${(props:track) => animation} ${props => props.time}s linear;
            animation-delay: ${props => props.time}s;
        }
    }
`

export const Fill = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    clip: rect(0px, 25px, 50px, 0px);
    background-color: ${(props:fill) => props.color};
`