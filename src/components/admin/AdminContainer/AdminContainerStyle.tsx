import styled from 'styled-components';
import { device } from '../../../utils/constants/mediaQueries'

export const Container = styled.div`
    padding: 20px 20px 60px 20px;
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

export const Content = styled.div`
    padding-bottom: 20px;
    width: 100%;
    min-height: calc(100vh - 180px);
    @media ${device.tablet} { 
        padding-bottom: 40px;
    }
    @media ${device.laptop} { 
        padding-bottom: 60px;
    }
`