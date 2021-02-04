import styled from 'styled-components'
import { SiteClickButtons } from '../../../../components/project'

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    h1 {
        font-size: ${props => props.theme.fontSize.xlarge};
        margin: 5px 0;
        text-transform: capitalize;
    }
`

export const ProjIcons = styled.div`
    margin: auto 0 0 0;
`

export const Stacks = styled.div`
    margin: 20px 0;
    h2 {
        font-size: ${props => props.theme.fontSize.small};
        font-weight: normal;
        margin: 0;
    }
`

export const Flex = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`

export const Language = styled.div`
    display: grid;
    grid-template-columns: 22px 1fr;
    column-gap: 10px;
    padding: 12px;
    img {
        object-fit: contain;
    }
    img, div {
        width: 100%;
        height: 100%;
    }
    div {
        text-transform: capitalize;

    }
`

export const SiteContainer = styled.div`
    max-width: 200px;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
`

export const Sites = styled(SiteClickButtons)`
    background-color: ${props => props.theme.bravo};
    border: 1px solid ${props => props.theme.currentThemeColorHover};
    padding: 10px;
    border-radius: 5px;
    display: grid;
    grid-template-columns: 25px 1fr;
    column-gap: 10px;
    &:hover {
        background-color: ${props => props.theme.currentThemeColorHover};
    }
`

export const DateAdded = styled.div`
    color: ${props => props.theme.bravo};
    font-size: ${props => props.theme.fontSize.small};
    font-style: italic;
    margin: 25px 0 0 0;
`