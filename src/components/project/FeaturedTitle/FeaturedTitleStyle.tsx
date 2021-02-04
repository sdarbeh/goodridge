import styled from 'styled-components'

export const Title = styled.div`
    color: ${props => props.theme.currentThemeColor};
    font-size: ${props => props.theme.fontSize.xsmall};
    font-weight: 600;
    display: grid;
    grid-template-columns: 1fr 15px;
    column-gap: 5px;
    width: max-content;
    div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    svg, div {
        width: 100%!important;
        height: 100%!important;
    }
`

export const Icon = styled.div`
    color: ${props => props.theme.currentThemeColor};
    width: 15px;
    height: 15px;
`