import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Content = styled.div`
    display: grid;
    grid-template-columns: 45px 1fr 40px;
    column-gap: 10px;
    position: relative;
    width: 100%;
`

export const LogoContainer = styled(NavLink)`
    div {
        width: 40px;
        height: 40px;
    }
`

export const SearchContainer = styled.div`
    width: 100%;
    position: relative;
    color: ${props => props.theme.charlie};
    max-width: 785px;
    margin: 0 auto;
    input {
        background-color: ${props => props.theme.bravo};
        height: 40px;
        border-radius: 5px;
        padding-left: 35px;
        width: calc(100% - 35px);
        &:focus {
            background-color: ${props => props.theme.currentThemeColorHover};
            box-shadow: ${props => props.theme.btnShadow};
        }
        &::placeholder {
            font-size: ${props => props.theme.fontSize.xsmall};
        }
    }
    svg {
        position: absolute;
        left: 7px;
        top: 0px;
        height: 100%;
        width: 22px;
        opacity: .3;
    }
`

export const CloseIcon = styled.div`
    color: ${props => props.theme.currentThemeColor};
    svg {
       transform: scale(.8);
        left: 0;
        top: 0; 
    }
`

export const Hamburger = styled.button`
    height: 100%;
    width: 40px;
    height: 40px;
    position: relative;
    & svg {
        position: absolute;
        height: 40px;
        width: 40px;
    }
`