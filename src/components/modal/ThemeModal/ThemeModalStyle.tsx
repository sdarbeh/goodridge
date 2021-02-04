import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-height: 30%;
    width: 90%;
    overflow-y: auto;
    background-color: ${props => props.theme.bravo};
    box-shadow: ${props => props.theme.btnShadow};
    z-index: 101;
    border-radius: 10px;
    max-width: 550px;
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 40px 20px 10px 20px;
    position: relative;
`

export const DoneButton = styled.button`
    background-color: ${props => props.theme.currentThemeColor};
    font-size: ${props => props.theme.fontSize.small};
    position: absolute;
    right: 10px;
    top: 10px;
    width: 80px;
    height: 30px;
    border-radius: 50px;
`

export const Description = styled.div`
    text-align: center;
    margin: 20px 0;
    opacity: .9;
    font-weight: 500;
`

export const SectionTitle = styled.div`
    font-size: .9rem;
    margin-bottom: 3px;
    text-align: left;
    width: 100%;
    opacity: .8;
    font-size: ${props => props.theme.fontSize.xsmall};
`

export const UIContainer = styled.div`
    background-color: ${props => props.theme.bravo};
    border-radius: 20px;
    padding: 15px;
    width: calc(100% - 30px);
    margin-bottom: 15px;
`