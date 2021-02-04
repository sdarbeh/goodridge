import styled from 'styled-components'

interface bg {
    overlay: string;
}

export const Container = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 50;
`

export const Backdrop = styled(Container)`
    z-index: 100;
    background-color: ${(props:bg) => props.overlay};
`