import styled from 'styled-components'

interface demo {
    fontSize: string
}

interface track {
    theme: any;
    percent: number;
}

interface fontSizeBtn {
    theme: any;
    isColored: boolean;
    isCurrentSize: boolean;
}

export const Container = styled.div`
    display: grid;
    grid-template-columns: 30px 1fr 30px;
    column-gap: 15px;
`

export const SizeDemo = styled.span`
    font-size: ${(props: demo) => props.fontSize};
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

export const Input = styled.input`
    background-color: ${props => props.theme.medium};
    position: absolute;
    width: 100%;    
    z-index: 2;
    &::-webkit-slider-thumb {
        background: ${props => props.theme.currentThemeColor};
        box-shadow: ${props => props.theme.btnShadow};
        transform: scale(1.5);
        width: 15px;
        height: 15px;
        border-radius: 50%;
        margin-top: -2px;
        cursor: pointer;
    }
    // track
    &::-webkit-slider-runnable-track {
        background: linear-gradient(to right,
            ${props => props.theme.currentThemeColor} ${(props: track) => props.percent}%,
            ${props => props.theme.medium} ${(props: track) => props.percent}%);
        width: 100%;
        height: 10px;
        border-radius: 10px;
        cursor: pointer;
    }
`

export const ButtonsContainer = styled.div`
    /* position: absolute; */
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`

export const Button = styled.div`
    background-color: ${(props: fontSizeBtn) => (
        props.isColored ? props.theme.currentThemeColor : props.theme.medium
    )};
    opacity: ${(props: fontSizeBtn) => props.isCurrentSize ? '0' : null}; 
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-top: -2px;
    &:nth-child(1) {
        margin-left: 2px;
    }
    &:nth-child(3) {
        margin: -2px auto 0 auto;
    }
    &:nth-child(4), &:nth-child(5) {
        margin: -2px 2px 0 auto;
    }
`