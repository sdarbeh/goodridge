import React from 'react';

import { ProjectReturn } from '../../../types/site'
// items
import { FeaturedTitle, Icons } from '../index'
import { Container } from './CardStyle'

interface props {
  project: ProjectReturn;
}

export default ({ project, ...rest }: props) => (
  <Container {...rest}>
    <div>
      {project.is_featured && (
        <FeaturedTitle />
      )}
      <h5>{project.name}</h5>
      <p>{project.description}</p>
    </div>
    <Icons project={project} />
  </Container>
)