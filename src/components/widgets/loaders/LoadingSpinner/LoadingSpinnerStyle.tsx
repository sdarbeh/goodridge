import styled from 'styled-components'

interface btn {
    size: number
}

export const Container = styled.div`
    width: ${(props:btn) => props.size};
    height: ${(props:btn) => props.size};
`