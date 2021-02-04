import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.theme.bravo};
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    div {
        font-size: ${props => props.theme.fontSize.small};
        padding: 5px 7px;
        opacity: 80%;
        font-weight: 500;
        height: calc(25px - 10px);
    }
    input {
        height: calc(33px - 7px);
    }
    input, textarea {
        width: calc(100% - 14px);
        border-bottom: 2px solid ${props => props.theme.medium};
        padding: 2px 7px 5px 7px;
        &:focus {
            border-color: ${props => props.theme.currentThemeColor};
        }
        &:read-only {
            border-color: ${props => props.theme.bravo};;
        }
    }
    textarea {
        height: calc(200px - 7px);
    }
`