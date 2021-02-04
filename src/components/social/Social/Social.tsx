import React, { useState, useRef } from 'react'
import { SocialReturn } from '../../../types/site'

import { socialImgUrl } from '../../../assets/social'
import { getColor } from '../../../utils/helpers/color'
// items
import { LinkButton, CenterDiv } from '../../widgets'
import { Container } from './SocialStyle'

interface p {
  social: SocialReturn
}

export default ({ social, ...rest }: p) => {
  const ref = useRef<any>();
  const [color, setColor] = useState<any>({
    primary: null,
    opacity: null
  })

  const handleImgLoad = () => {
    setColor({
      primary: getColor(ref.current),
      opacity: getColor(ref.current, .1)
    })
  }
  
  return (
    <Container {...rest} color={color}>
      <LinkButton to={social.website} newTab>
        <CenterDiv>
          <img 
            src={social.image_url ? social.image_url : socialImgUrl(social.name)} 
            alt={social.name}
            crossOrigin={'anonymous'}
            ref={ref}
            onLoad={handleImgLoad}
          />
        </CenterDiv>
        <span>{social.name}</span>
      </LinkButton>
    </Container>
  )
}