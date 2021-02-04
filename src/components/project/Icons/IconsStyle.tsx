import styled from 'styled-components'

export const Container = styled.div`
    justify-content: space-between;
    margin: 5px 0 0 0;
    height: 30px;
    &, div, span {
        display: flex;
        align-items: center; 
    }
    img {
        object-fit: contain;
    }
    svg, img {
        width: 20px;
        height: 20px;
        margin-right: 7px;
    }
    span {
       justify-content: center;
    }
    button, span {
       &:last-child svg {
           margin-right: unset; 
        } 
    }
    button svg {
        transition: .2s ease-in;
        &:hover {
            color: ${props => props.theme.currentThemeColor};
        }
    }
`

export const Link = styled.div`
    font-size: ${props => props.theme.fontSize.small};
    background-color: ${props => props.theme.currentThemeColorHover};
    border-radius: 10px;
    overflow: hidden;
    button {
        width: 100px;
        height: 35px;
    }
    span, svg {
        opacity: .6;
    }
    svg {
        width: 17px;
        height: 17px;
        margin-left: 10px;
    }
`