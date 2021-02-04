import styled from 'styled-components'
import { device } from '../../../utils/constants/mediaQueries'

interface display {
    theme: any;
    expanded: boolean;
}

interface prop extends display {
    bg: string;
}

export const Container = styled.div`
    background-image: url(${(props:prop) => props.bg});
    width: 100%;
    height: 400px;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    @media ${device.tablet} { 
        width: 60%;
        overflow: unset;
        transition: all .3s ease-out;
        margin: ${(props:display) => props.expanded ? '50px 0 50px auto' : '0 0 0 auto'};
        height: 300px;
        border-radius: 10px;
    }
`

export const Content = styled.div`
    padding: 20px;
    height: calc(100% - 40px);
    background-color: rgba(0,0,0,.7);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    h5 {
        font-size: ${props => props.theme.fontSize.xlarge};
        margin: 5px 0 0 0;
    }
    span {
        font-size: ${props => props.theme.fontSize.small};
    }
    @media ${device.tablet} { 
        position: absolute;
        left: -67%;
        top: 0;
        width: 60%;
        padding: unset;
        height: 100%;
        background-color: unset;
        z-index: 1;
        p {
            color: ${props => props.theme.globalColors.white};
            background-color: ${props => props.theme.currentThemeColor};
            filter: brightness(75%);
            padding: 10px 20px;
            transition: width .2s ease-in;
            width: ${(props:display) => props.expanded ? '85%' : '150%'};
            border-radius: 10px;
        }
    }
`

export const ProjIcons = styled.div`
    margin: auto 0 0 0;
`

export const Overlay = styled.div`
    display: none;
    opacity: 0;
    @media ${device.tablet} {
        display: unset;
        opacity: 1;
        position: absolute;
        left: 0;
        top: 0;
        background-color: rgba(0,0,0,.8);
        padding: 15px;
        width: calc(100% - 30px);
        height: calc(100% - 30px);
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        border-radius: 10px;
        overflow: hidden;
        button {
            background-color: ${props => props.theme.currentThemeColor};
            color: ${props => props.theme.globalColors.white};
            font-size: ${props => props.theme.fontSize.xsmall};
            width: 80px;
            height: 35px;
            border-radius: 5px;
            opacity: 0;
        }
        &:hover {
            background-color: transparent;
            button {
                opacity: 1;
            }
        }
    }
`

export const Collapse = styled.button`
    position: absolute;
    right: 0;
    bottom: -50px;
    color: ${props => props.theme.currentThemeColor};
    font-weight: 700;
`