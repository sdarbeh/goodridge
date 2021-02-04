import styled from 'styled-components';
import { device } from '../../../utils/constants/mediaQueries'

export const Container = styled.div`
    padding: 60px 10px 20px 10px;
    width: calc(100% - 20px);
    height: calc(100vh - 80px);
`

interface head {
    rightContent?: boolean;
    theme: any;
}

export const HeadContent = styled.div`
    display: grid;
    grid-template-columns: ${(p:head) => p.rightContent ? '25px 1fr' : '25px 1fr 25px'};
    column-gap: 20px;
    height: 100%;
    width: 100%;
    max-width: 785px;
    margin: 0 auto;
    div {
        display: flex;
        align-items: center;
    }
    h1 {
        color: ${props => props.theme.charlie};
        font-size: ${props => props.theme.fontSize.xlarge};
        margin: 0;
        text-transform: capitalize;
    }
    svg {
        color: ${props => props.theme.currentThemeColor};
        width: 100%;
        height: 100%;
    }
`

export const Content = styled.div`
    width: 100%;
    height: 100%;
    @media ${device.tablet} {
        padding: 0 20px; 
        max-width: 785px;
        margin: 20px auto 0 auto;
    }
    @media ${device.laptop} {
        padding: unset;
    }
`

export const Loading = styled.div`
    width: 100%;
    height: calc(100% - 60px);
    padding-bottom: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
`