import React from 'react'
import { socialImgUrl } from '../../../assets/social'
import { SocialReturn } from '../../../types/site'

// items
import { LinkButton } from '../../widgets'
import { Container } from './SocialLiteStyle'

interface p {
  social: SocialReturn
}

export default ({ social }: p) => {
  return (
    <Container>
      <LinkButton to={social.website} newTab>
        <img
          src={social.image_url ? social.image_url : socialImgUrl(social.name)}
          alt={social.name}
        />
      </LinkButton>
    </Container>
  )
}