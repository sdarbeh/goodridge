import React, { useState } from 'react'
// items
import { Container } from './AnimationStyle'

interface props {
  handleLike: any
  disabled?: boolean;
}

export default ({ handleLike, disabled }: props) => {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleClick = () => {
    setIsAnimating(true)
    handleLike()
  }

  return (
    <Container isAnimating={isAnimating}>
      <button onClick={handleClick} disabled={disabled}>
        <div />
      </button>
    </Container>
  )
}