import styled from 'styled-components'


interface prop {
    theme: any;
    active: any;
}

export const Navigation = styled.nav`
    position: relative;
    &, & svg {
        width: 100%;
        height: 100%;
    }
`

export const ItemContent = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    row-gap: 10px;
    margin: 10px 0 20px 0;
    & div:nth-child(2) {
        justify-content: flex-start;
    }
`

export const Title = styled.div`
    font-weight: 600;
    padding: 0 6px;
    text-transform: uppercase;
    opacity: 60%;
    font-size: ${props => props.theme.fontSize.xsmall};
`

const Item = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    & a, & button {
        display: grid;
        grid-template-columns: 25px 1fr;
        column-gap: 20px;
        height: calc(45px - 10px);
        padding: 5px 10px;
    }
    &:hover {
        background-color: ${props => props.theme.currentThemeColorHover};
    }
`

export const NavItem = styled(Item)`
    color: ${(props:prop) => props.active ? props.theme.currentThemeColor : null};
    & a {
        font-weight: ${(props:prop) => props.active ? 700 : 500};
    }
`

// export const Resume = styled

export const RegItem = styled(Item)`
    font-weight: 600;
`

export const ThemeItem = styled(Item)`
    position: absolute;
    left: 0;
    bottom: 25px;
    font-weight: 600;
    height: unset;
    border: 2px solid ${props => props.theme.medium};
    width: calc(100% - 4px);
    height: 45px;
    & button {
        width: 100%;
        height: 100%;
        grid-template-columns: 40px 1fr;
    }
    & div {
        justify-content: flex-start;
    }
`

export const Metadata = styled.div`
    font-size: ${props => props.theme.fontSize.xsmall};
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    opacity: .1;
`