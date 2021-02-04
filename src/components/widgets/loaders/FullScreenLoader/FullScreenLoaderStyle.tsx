import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${props => props.theme.alpha};
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 201;
`

export const Message = styled.div`
    font-size: ${props => props.theme.fontSize.small};
    color: ${props => props.theme.medium};
    font-weight: 600;
    font-style: italic;
    text-align: center;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 10px;
    width: calc(100% - 20px);
`

export const Moji = styled.div`
    background-color: ${props => props.theme.medium};
    box-shadow: ${props => props.theme.btnShadow};
    border-radius: 50%;
    width: 125px;
    height: 125px;
    overflow: hidden;
`