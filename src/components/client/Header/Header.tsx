import React from 'react'
// items
import { Container } from './HeaderStyle'

export default ({ children, withDesktopBg, ...rest }: any) => (
    <Container bg={withDesktopBg} {...rest}>
        {children}
    </Container>
)