import styled from 'styled-components';
import { CenterDiv } from '../../widgets'

interface sort {
    theme: any;
    active: boolean;
}

interface display {
    theme: any;
    active: boolean;
}

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${props => props.theme.bravo};
    /* padding-bottom: 15px; */
    button {
        font-size: ${props => props.theme.fontSize.small};
        background-color: ${(props:sort) => props.active ? props.theme.currentThemeColorHover : null};
        opacity: ${(props:sort) => props.active ? 1 : .75};
        margin-left: ${(props:sort) => !props.active ? '-10px' : null};
        transition: margin 0.2s ease-in;
        display: grid;
        grid-template-columns: 16px 1fr 16px;
        column-gap: 6px;
        padding: 5px 12px;
        border-radius: 3px;
        text-transform: capitalize;
    }
`

export const DownArrow = styled(CenterDiv)`
    transform: ${(props:sort) => props.active ? 'rotate(180deg)' : null};;
    svg {
      width: 10px;
      height: 10px;  
    }
`

export const Switch = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 28px;
    background-color: ${props => props.theme.bravo};
    border-radius: 50px;
    cursor: pointer;
    div {
        box-shadow: ${props => props.theme.btnShadow};
        left: ${(props:display) => props.active ? '30px' : 0};
        background-color: ${(props:display) => props.active ? props.theme.currentThemeColor : null};
        color: ${(props:display) => props.active ? props.theme.alpha : null};
        position: absolute;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        transition: .4s;
        border-radius: 50%;
    }
    svg {
        width: 60%;
        height: 60%;
        opacity: .75;
    }
`