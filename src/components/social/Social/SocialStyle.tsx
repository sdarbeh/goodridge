import styled from 'styled-components'

interface p {
  color: any;
  theme: any;
}

export const Container = styled.div`
  height: 60px;
  button {
    border: 1px solid ${(p:p) => p.color.primary ? p.color.primary : p.theme.currentThemeColor};
    box-shadow: ${props => props.theme.btnShadow};
    padding: 12px 12px;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    position: relative;
    &:hover {
      background-color: ${(p:p) => p.color.opacity ? p.color.opacity : p.theme.currentThemeColorHover};
    }
  }
  span {
    text-transform: capitalize;
  }
  div {
    width: 30px;
    height: 100%;
    position: absolute;
    left: 12px;
    top: 0;
  }
  img {
    object-fit: contain;
  }
`