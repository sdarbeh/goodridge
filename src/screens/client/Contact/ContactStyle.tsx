import styled from 'styled-components';
import { FormButton as Button } from '../../../components/form'

export const Content = styled.div`
    max-width: 500px;
    margin: 0 auto;
`

export const Title = styled.div`
  h1 {
    font-size: ${props => props.theme.fontSize.jumbo};
    margin: 0;  
  }
  span {
    font-size: ${props => props.theme.fontSize.small};
    color: ${props => props.theme.currentThemeColor};
    opacity: .8;
  }
`

export const FormContent = styled.div`
    margin: 30px 0;
    display: grid;
    row-gap: 20px;
`

export const FormButton = styled(Button)`
    height: 50px;
    border-radius: 50px;
`

export const EmailInstead = styled.div`
    width: 100%;
    height: 50px;
    position: relative;
    a, div {
      display: flex;
      align-items: center;
      justify-content: center;      
    }
    a {
      background-color: ${props => props.theme.globalColors.warn};
      font-size: ${props => props.theme.fontSize.small};
      color: ${props => props.theme.globalColors.black};
      font-weight: 700;
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 50px;
      width: 100%;
      height: 100%;
      div:nth-child(1) {
        display: grid;
        grid-template-columns: 25px 1fr;
        column-gap: 10px;
      }
    }
`