import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${props => props.theme.bravo};
    box-shadow: ${props => props.theme.btnShadow};
    border: 1px solid ${props => props.theme.medium};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    overflow: hidden;
    &:hover {
        background-color: ${props => props.theme.currentThemeColor};
    }
`