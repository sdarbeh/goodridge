import React, { useState } from 'react';

import { ProjectReturn } from '../../../types/site'
// items
import { FeaturedTitle, Icons } from '../index'
import { Container, Content, ProjIcons, Overlay, Collapse } from './FeaturedStyle'

interface props {
  project: ProjectReturn
}

export default ({ project }: props) => {
  const [expanded, setExpanded] = useState(false)
  return (
    <Container bg={''} expanded={expanded}>
      <Content expanded={expanded}>
        <div>
          <FeaturedTitle />
          <h5>{project.name}</h5>
          <span>{project.title}</span>
          <p>{project.description}</p>
        </div>
        <ProjIcons>
          <Icons
            project={project}
            linkOnly
          />
        </ProjIcons>
      </Content>
      {!expanded && (
        <Overlay>
          <button onClick={() => setExpanded(true)}>
            Expand
          </button>
        </Overlay>
      )}
      {expanded && (
        <Collapse onClick={() => setExpanded(false)}>Collapse</Collapse>
      )}
    </Container>
  )
}