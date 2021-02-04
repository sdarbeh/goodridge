import styled from 'styled-components';

export const Msg = styled.div`
    font-size: ${props => props.theme.fontSize.small};
    color: ${props => props.theme.globalColors.error};
    padding: 5px 0;
    display: grid;
    grid-template-columns: 15px 1fr;
    column-gap: 5px;
    & svg {
        width: 100%;
        height: 100%;
    }
`