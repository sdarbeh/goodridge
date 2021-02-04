import styled from 'styled-components';

interface btn {
    theme: any;
    active: boolean;
}

export const ModalTitle = styled.div`
    font-size: ${props => props.theme.fontSize.xsmall};
    opacity: .7;
    font-weight: 600;
    padding: 12px 15px;
`

export const Button = styled.button`
    color: ${(props:btn) => !props.active ? props.theme.medium : null};
    display: grid;
    grid-template-columns: 20px 1fr;
    column-gap: 10px;
    padding: 12px 15px;
    width: 100%;
    &:hover {
        background-color: ${props => props.theme.currentThemeColorHover};
    }
    span {
        text-align: left;
        text-transform: capitalize;
    }
`