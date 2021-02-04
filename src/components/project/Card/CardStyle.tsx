import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${props => props.theme.bravo};
    padding: 20px;
    border-radius: 3px;
    opacity: .6;
    transition: .5s ease;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    h5 {
        font-size: ${props => props.theme.fontSize.xlarge};
        margin: 0;
        text-transform: capitalize;
    }
    &:hover {
        opacity: 1;
        transform: scale(1.03);
    }
`

export const Foot = styled.div`
    justify-content: space-between;
    margin: auto 0 0 0;
    height: 30px;
    &, div, span {
        display: flex;
        align-items: center; 
    }
    svg {
        width: 20px;
        height: 20px;
        margin-right: 7px;
    }
    span {
       justify-content: center;
       
    }
    button, span {
       &:last-child svg {
           margin-right: unset; 
        } 
    }
`