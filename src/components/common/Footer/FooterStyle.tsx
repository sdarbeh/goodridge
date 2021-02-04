import styled from 'styled-components'
import { device } from '../../../utils/constants/mediaQueries'

export const Footer = styled.footer`
    background-color: ${props => props.theme.alpha};
    font-size: ${props => props.theme.fontSize.xsmall};
    min-height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
`

export const Nav = styled.ul`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    opacity: .7;
    li {
        margin-right: 15px;
    }
`

export const Copyright = styled.div`
    color: ${props => props.theme.medium};
    @media ${device.tablet} { 
        display: grid;
        grid-template-rows: repeat(1, 1fr);
        grid-template-areas: 'meta copy';
        column-gap: 20px;
        div:nth-child(1) {
            grid-area: copy;
        }
        div:nth-child(2) {
            grid-area: meta;
        }
    }
`