import styled from 'styled-components'

export const FormButton = styled.button`
    background-color: ${props => props.theme.currentThemeColor};
    font-size: ${props => props.theme.fontSize.small};
    width: 100%;
    height: 40px;
    border-radius: 3px;
`