import styled from 'styled-components';

interface p {
    visible: boolean;
}

export const Container = styled.div`
    position: relative;
    button {
        position: absolute;
        right: 0;
        bottom: 0;
        height: 35px;
        width: 20px;
    }
    svg {
        width: 100%;
        height: 100%;
        opacity: ${(props:p) => props.visible ? .7 : .1};
    }
`