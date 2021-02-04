import styled from 'styled-components'
import { device } from '../../../../../utils/constants/mediaQueries'

interface btn {
    theme: any;
    modeAlpha: string;
    modeCharlie: string;
    isCurrentMode: boolean;
}

export const Container = styled.div`
    display: grid;
    row-gap: 10px;
    @media ${device.tablet} { 
        grid-template-columns: repeat(3, 1fr);
        column-gap: 10px;
        row-gap: unset;
    }
`

export const Button = styled.button`
    background-color: ${(props: btn) => props.modeAlpha};
    color: ${(props: btn) => props.modeCharlie};
    border: 2px solid ${(props: btn) => 
        props.isCurrentMode ? props.theme.currentThemeColor : props.theme.medium };
    box-shadow: ${(props: btn) => props.isCurrentMode ? props.theme.btnShadow : 'unset'};
    font-size: ${props => props.theme.fontSize.xsmall};
    text-transform: capitalize;
    display: grid;
    grid-template-columns: 25px 1fr;
    padding: 20px 15px;
    border-radius: 5px;
    font-weight: 600;
    & svg {
        width: ${props => props.theme.fontSize.xlarge};
        height: ${props => props.theme.fontSize.xlarge};
        transform: scale(1.2);
        opacity: ${(props: btn) => props.isCurrentMode ? 100 : '50%'};
        color: ${(props: btn) => props.isCurrentMode ? props.theme.currentThemeColor : 'inherit'};
        box-shadow: ${(props: btn) => props.isCurrentMode ? props.theme.btnShadow : 'unset'};
        border-radius: 50%;
        overflow: hidden;
    }
    & div:nth-child(2) {
        /* button text value --- allows centered */
        margin-left: -25px;
        width: calc(100% + 25px);
    }
`