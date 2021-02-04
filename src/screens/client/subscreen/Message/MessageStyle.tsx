import styled from 'styled-components';

interface link {
    copied: boolean;
    theme: any;
}

export const Content = styled.div`
    padding-bottom: 60px;
    width: 100%;
    height: calc(100% - 60px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h3, p {
        word-break: normal;
    } 
    svg {
        color: ${props => props.theme.globalColors.success};
        width: 80px;
        height: 80px;
    }
    span {
        text-align: center;
        font-size: ${props => props.theme.fontSize.small};
        word-break: normal;
    }
    button {
        background-color: ${props => props.theme.currentThemeColorHover};
        border: 1px solid ${(p:link) => !p.copied ? p.theme.currentThemeColor : 'transparent'};
        color: ${(p:link) => p.copied ? p.theme.medium : 'unset'};
        font-size: ${props => props.theme.fontSize.xsmall};
        margin: 20px 0;
        border-radius: 5px;
        padding: 5px 10px;
    }
`

export const FirstVisit = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column; 
`

export const MessageText = styled.div`
    p {
        font-size: ${props => props.theme.fontSize.small};
        background-color: ${props => props.theme.bravo};
        color: ${props => props.theme.medium};
        padding: 10px 12px;
        border-radius: 5px;
        margin: 4px 0 10px 0;
    }
    span {
        font-size: ${props => props.theme.fontSize.xsmall};
        opacity: .3;
        font-weight: 500;
    }
`