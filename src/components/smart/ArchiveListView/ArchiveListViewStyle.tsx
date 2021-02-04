import styled from 'styled-components'
import { Icons } from '../../project'

interface p {
    theme: any;
    featured: boolean;
}

export const Title = styled.div`
    font-size: ${props => props.theme.fontSize.large};
    background-color: ${props => props.theme.alpha};
    opacity: .7;
    display: grid;
    grid-template-columns: 45px 1fr 100px;
    column-gap: 10px;
    text-align: left;
    font-weight: 600;
    width: 100%;
    padding: 10px 0;
`

export const Table = styled.table`
    width: 100%;
    tr {
        display: grid;
        grid-template-columns: 45px 1fr 100px;
        column-gap: 10px;
        padding: 7px 0;
    }
    td {
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: capitalize;
    }
    td:nth-child(1) {
        color: ${props => props.theme.currentThemeColor};
    }
    td:nth-child(2) {
        font-weight: 600;
        justify-content: flex-start;
    }
`

export const Thead = styled.thead`
    transition: .5s ease;
    opacity: .7;
    &:hover {
        opacity: 1;
        background-color: ${(props:p) => props.featured ? props.theme.currentThemeColorHover : props.theme.bravo};
    }
`

export const ProjectTitle = styled.div`
    display: grid;
    grid-template-columns: 15px 1fr;
    column-gap: 5px;
`

export const ProjectIcons = styled(Icons)`
    div {
       display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 15px; 
    }
    svg {
        height: 100%;
        width: 100%;
        margin: 0;
    }
`
