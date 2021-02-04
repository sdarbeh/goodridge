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
  const [err, setErr] = useState(false)
  const [color, setColor] = useState<any>({
    primary: null,
    opacity: null
  })

  const socialUrl = socialImgUrl(social.name)
  const img = {
    valid: social.image_url || socialUrl,
    src: social.image_url ? social.image_url : socialUrl
  }

  const handleImgLoad = () => {
    setColor({
      primary: getColor(ref.current),
      opacity: getColor(ref.current, .1)
    })
  }

  return (
    <Container {...rest} color={color}>
      <LinkButton to={social.website} newTab>
        {img.valid && !err && (
          <CenterDiv>
            <img
              src={img.src}
              alt={social.name}
              crossOrigin={'anonymous'}
              ref={ref}
              onLoad={handleImgLoad}
              onError={() => setErr(true)}
            />
          </CenterDiv>
        )}
        <span>{social.name}</span>
      </LinkButton>
    </Container>
  )
}