import styled from 'styled-components'

const VL = styled.div`
    position: fixed;
    bottom: 20px;
    z-index: 10;
    color: ${props => props.theme.medium};
`

export const Left = styled(VL)`
  left: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  a {
    font-size: ${props => props.theme.fontSize.small};
    writing-mode: vertical-rl;
    font-weight: bold;
    &:hover {
      color: ${props => props.theme.currentThemeColor};
    }
  }
`

interface r {
  expanded: boolean;
}

export const Right = styled(VL)`
    right: 60px;
    display: flex;
    align-items: center;
    button svg {
        width: 12px;
        height: 12px;
        transition: .3s ease-in;
        transform: ${(p: r) => !p.expanded ? 'rotate(-90deg)' : 'rotate(90deg)'};
        opacity: ${(p: r) => !p.expanded ? .5 : 1};
    }
`

interface s extends r {
  length: number;
  theme: any
}

export const SocialContainer = styled.div`
  width: ${(p: s) => !p.expanded ? 0 : null};
  overflow: ${(p: s) => !p.expanded ? 'hidden' : null};
  display: grid;
  grid-template-columns: ${(p: s) => p.length ? `repeat(${p.length}, 35px)` : null};
  column-gap: 10px;
  margin-right: 20px;
  transition: width .3s ease-in;
  button {
    background-color: ${props => props.theme.bravo};
    padding: 5px;
    border-radius: 50%;
    overflow: hidden;
    &:hover {
      box-shadow: ${props => props.theme.btnShadow};
    }
  }
`