import styled from 'styled-components'
import { device } from '../../../../../utils/constants/mediaQueries'

interface btn {
    theme: any;
    themeColor: string;
    isCurrentColor: boolean;
}

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    & div {
        flex-direction: column;
        padding: 5px 0;
        width: calc((100% / 3) - 10px);
        height: max-content;
    }
    & span {
        font-size: ${props => props.theme.fontSize.xsmall};
        text-transform: capitalize;
    }
    @media ${device.tablet} { 
        flex-wrap: nowrap;
    }
`

export const Button = styled.button`
    background-color: ${(props: btn) => props.themeColor};
    color: ${props => props.theme.alpha};
    box-shadow: ${(props: btn) => props.isCurrentColor ? props.theme.btnShadow : 'unset'};
    width: 5vh;
    height: 5vh;
    border-radius: 50%;
    margin-bottom: 4px;
    & svg {
        width: 60%;
        height: 60%;
    }
`