import React, {useState} from 'react'

//items
import { Animation, Heart } from './widgets'
import { Container } from './LikeAnimationStyle'

interface props {
  isLiked: boolean;
  handleLikeToggle: any;
  disabled?: boolean;
}

export default ({ isLiked, handleLikeToggle, disabled }: props) => {
  const [heartWasClicked, setHeartWasClicked] = useState(false)
  const [animateDone, setAnimateDone] = useState(false)

  const handleHeartClick = () => {
    setHeartWasClicked(true)
    handleLikeToggle()
    setAnimateDone(false)
  }

  const handleAnimClick = () => {
    handleLikeToggle()
    const timer = setInterval(() => {
      setAnimateDone(true)
      clearTimeout(timer)
    }, 750)
  }

  const isReallyLiked = () => {
    if (isLiked && !heartWasClicked) {
      return true
    } else if (animateDone && heartWasClicked) {
      return true
    }
    return false
  }

  return (
    <Container>
      {isReallyLiked() ?
        <Heart handleLike={handleHeartClick} disabled={disabled} />
        : 
        <Animation handleLike={handleAnimClick} disabled={disabled} />
      }
    </Container>
  )
}