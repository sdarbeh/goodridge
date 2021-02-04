import styled from 'styled-components'
import { device } from '../../../utils/constants/mediaQueries'

interface p {
    theme: any;
    bg: boolean;
}

export const Container = styled.header`
    background-color: ${props => props.theme.alpha};
    color: ${props => props.theme.medium};
    position: fixed;
    top: 0;
    left: 0;
    padding: 0 10px;
    width: calc(100% - 20px);
    height: 60px;
    z-index: 5;
    border-radius: 10px 10px 0 0;
    display: flex;
    align-items: center;
    @media ${device.tablet} { 
        padding: 10px 40px;
        width: calc(100% - 80px);
    }
    @media ${device.laptop} { 
        background-color: ${(props:p) => !props.bg ? 'transparent' : null};
    }
`