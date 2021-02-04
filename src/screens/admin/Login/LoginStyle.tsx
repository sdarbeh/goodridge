import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img {
        width: 60px;
        height: 50px;
    }
`

export const Title = styled.div`
    position: relative;
    margin: 0 0 30px 0;
    h1 {
        margin: 0;
        font-size: ${props => props.theme.fontSize.large};
        text-align: center;
    }
    svg {
        color: ${props => props.theme.currentThemeColor};
        width: 20px;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }
`

export const Content = styled.div`
    background-color: ${props => props.theme.bravo};
    box-shadow: ${props => props.theme.btnShadow};
    padding: 20px;
    border-radius: 10px;
    width: calc(80% - 40px);
    max-width: calc(350px - 40px);
    form {
        display: grid;
        row-gap: 20px;
    }
`