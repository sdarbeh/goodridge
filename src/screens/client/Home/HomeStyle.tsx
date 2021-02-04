import styled from 'styled-components';
import { device } from '../../../utils/constants/mediaQueries'

export const Content = styled.div`
    padding-bottom: 100px;
`

export const Intro = styled.div`
    /* 60px header - 20px padding */
    height: calc(100vh - 80px);
    flex-direction: column;
    margin-top: -80px;
    &, a {
       display: flex;
       align-items: center;
       justify-content: center; 
    }
    div {
        width: 100%;
        padding: 50px 0;
    }
    span {
        color: ${props => props.theme.currentThemeColor};
    }
    h1, h2 {
        margin: 0;
    }
    h1 {
        font-size: ${props => props.theme.fontSize.xjumbo};
    }
    h2 {
        font-size: ${props => props.theme.fontSize.jumbo};
        opacity: .7;
        line-height: 35px;
        font-weight: 600;
    }
    p {
        opacity: .5;
        margin: 15px 0 0 0;
    }
    a {
        font-size: ${props => props.theme.fontSize.small};
        border: 2px solid ${props => props.theme.currentThemeColor};
        border-radius: 5px;
        width: 145px;
        height: 40px;
        margin: 0 auto 0 0;
        &:hover {
            background-color: ${props => props.theme.currentThemeColorHover};
        }
    }
    @media ${device.tablet} { 
        margin-top: -100px;
        h1 {
            font-size: ${props => props.theme.fontSize.xxjumbo};
        }
        h2 {
            font-size: ${props => props.theme.fontSize.xjumbo};
        }
    }
    @media ${device.laptop} { 
        margin-top: -120px;
    }
`

export const Divider = styled.hr`
    width: 20%;
    max-width: 50px;
    margin: 125px auto 0;
    background-color: ${props => props.theme.medium};
    opacity: .2;
`

export const SectionTitle = styled.h3`
    display: flex;
    align-items: center;
    margin: 0 0 35px;
    font-size: ${props => props.theme.fontSize.large};
    word-break: keep-all;
    &:after {
        content: "";
        display: block;
        margin-left: 10px;
        width: 100%;
        height: 1px;
        background-color: ${props => props.theme.medium};
        opacity: .3;
    }
`

export const Section = styled.div`
    padding-top: 125px;
`

export const About = styled(Section)`
    p, h4, ul {
        opacity: .7;
    }
    h4 {
        font-size: ${props => props.theme.fontSize.normal};
        margin: 0;
        font-weight: 500;
    }
    & ul {
        margin-top: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 10px;
        grid-row-gap: 10px;
        row-gap: 10px;
        width: 100%;
    }
    & li {
        font-size: ${props => props.theme.fontSize.small};
        width: 100%;
        margin: 0;
        position: relative;
        padding-left: 18px;
        font-weight: 600;
        &:before {
            content: "";
            position: absolute;
            left: 0;
            top: 30%;
            width: 3px;
            height: 3px;
            border-radius: 50%;
            border: 2px solid ${props => props.theme.currentThemeColor};
        }
    }
`

export const ProjectContainer = styled.div`
    display: grid;
    row-gap: 25px;
    @media ${device.tablet} {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 20px;
        row-gap: 20px;
    }
    @media ${device.laptop} {
        grid-template-columns: repeat(3, 1fr);
    }
`

export const FeaturedProjects = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    row-gap: 50px;
    margin-bottom: 100px;
    @media ${device.tablet} { 
        row-gap: 150px;
    }
`

export const ExtendedTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 30px;
    h4 {
        font-size: ${props => props.theme.fontSize.large};
        margin: 0 0 5px 0;
    }
    a {
        color: ${props => props.theme.currentThemeColor};
        font-size: ${props => props.theme.fontSize.small};
    }
`

export const Contact = styled(Section)`
    a {
       color: ${props => props.theme.currentThemeColor}; 
    }
    a {
        font-weight: 600;
    }
    p, h4 {
        opacity: .7;
    }
    p {
        margin: 10px 0 5px 0;
    }
    h4 {
        font-size: ${props => props.theme.fontSize.normal};
        font-weight: 500;
        margin: 10px 0 0 0;
    }
`

export const ContactEmail = styled.a`
    font-size: ${props => props.theme.fontSize.xlarge};
    font-weight: 700;
    display: grid;
    grid-template-columns: 25px 1fr;
    column-gap: 10px;
    width: max-content;
    svg {
        width: 100%;
        height: 100%;
    }
`