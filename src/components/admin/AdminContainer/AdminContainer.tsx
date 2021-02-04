import React from 'react';

// items
import { Navigation } from '../index'
import { Container, Content } from './AdminContainerStyle'

export default ({ children }: any) => {
  return (
    <Container>
      <Content>
        {children}
      </Content>
      <Navigation />
    </Container>
  );
}