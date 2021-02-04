import styled from 'styled-components'

interface prop {
    theme: any;
    active: any;
}

export const Navigation = styled.nav`
    background-color: ${props => props.theme.alpha};
    box-shadow: ${props => props.theme.btnShadow};
    padding: 10px;
    border-radius: 10px;
    position: absolute;
    right: 0;
    top: 70px;
    width: max-content;
    display: grid;
    row-gap: 20px;
    padding-bottom: 25px;
    svg {
        width: 30px;
        height: 30px;
    }
`

const Item = styled.div`
    height: 45px;
    border-radius: 5px;
    justify-content: center;
    padding: 0 10px;
    width: calc(140px - 20px); 
    &, a {
       display: flex;
       align-items: center; 
    }
    a, button {
        width: 100%;
        height: 100%;
        justify-content: space-between; 
    }
    &:hover {
        background-color: ${props => props.theme.currentThemeColorHover};
    }
    svg {
        width: 25px;
        height: 25px;
    }
    img {
        width: 30px;
        height: 30px;
    }
`

export const NavItem = styled(Item)`
    color: ${(props:prop) => props.active ? props.theme.currentThemeColor : null};
    &:hover {
        color: ${(props:prop) => !props.active && props.theme.charlie};
    }

`

export const Metadata = styled.div`
    font-size: ${props => props.theme.fontSize.xsmall};
    width: 100%;
    position: absolute;
    left: 20px;
    bottom: 5px;
    opacity: .15;
`