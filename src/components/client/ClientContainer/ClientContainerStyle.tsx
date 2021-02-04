import styled from 'styled-components';
import { device } from '../../../utils/constants/mediaQueries'

export const Container = styled.div`
    padding: 60px 20px 20px 20px;
    width: calc(100% - 40px);
    height: calc(100vh - 80px);
    @media ${device.tablet} { 
        padding: 60px 40px 20px 40px;
        width: calc(100% - 80px);
        max-width: 785px;
        margin: 0 auto;
        position: relative;
    }
`

export const Header = styled.div`
    background-color: ${props => props.theme.alpha};
    color: ${props => props.theme.medium};
    position: fixed;
    top: 0;
    left: 0;
    padding: 10px;
    width: calc(100% - 20px);
    height: calc(60px - 20px);
    z-index: 5;
    border-radius: 10px 10px 0 0;
`

export const HeaderContent = styled.div`
    display: grid;
    grid-template-columns: 40px 1fr 40px;
    column-gap: 10px;
    a {
        display: flex;
        align-items: center;
        width: 40px;
        height: 100%;
        justify-content: center;
        svg:nth-child(1) {
            width: 30px;
        }
    }
`

export const Content = styled.div`
    padding-top: 20px;
    width: 100%;
    min-height: calc(100vh - 180px);
    @media ${device.tablet} { 
        padding-top: 40px;
        min-height: calc(100vh - 200px);
    }
`