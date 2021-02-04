import React from 'react'
import { projectLikeIcon } from '../../../../../assets/icons/project'

// items
import { Container } from './HeartStyle'

interface props {
  handleLike: any
  disabled?: boolean;
}

export default ({ handleLike, disabled }: props) => {
  return (
    <Container>
      <button onClick={handleLike} disabled={disabled}>
        {projectLikeIcon}
      </button>
    </Container>
  )
}