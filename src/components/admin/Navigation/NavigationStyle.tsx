import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

interface prop {
  theme: any;
  active: any;
}

export const Container = styled.div`
  background-color: ${props => props.theme.bravo};
  color: ${props => props.theme.medium};
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0 10px;
  width: calc(100% - 20px);
  height: 60px;
  z-index: 5;
  border-radius: 20px 20px 0 0;
`

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 100%;
`

export const NavItem = styled(NavLink)`
  color: ${(props:prop) => props.active ? props.theme.currentThemeColor : null};
  font-size: ${props => props.theme.fontSize.xsmall};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  svg {
    width: 25px;
    height: 25px;
  }
  span {
    display: none;
  }
`