import React from 'react'
import styled from 'styled-components'


export default ({ children, ...rest }: any) => (
    <Div {...rest}>
        {children}
    </Div>
)

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`