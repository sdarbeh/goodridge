import styled from 'styled-components';

export const Content = styled.div`
    display: grid;
    /* grid-template-rows: 80px 45px 1fr; */
    grid-template-rows: 80px 1fr;
    row-gap: 10px;
`

export const Title = styled.div`
  h1 {
    font-size: ${props => props.theme.fontSize.xjumbo};
    margin: 0;  
  }
  span {
    font-size: ${props => props.theme.fontSize.small};
    color: ${props => props.theme.currentThemeColor};
    opacity: .7;
  }
`