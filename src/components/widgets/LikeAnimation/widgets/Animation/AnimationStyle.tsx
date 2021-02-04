import styled, { keyframes } from 'styled-components'
import { like_animation_image } from '../../../../../assets/public'

const burst = () => keyframes`
  from {background-position:left;}
  to { background-position:right;}
`

interface heart {
  isAnimating: boolean;
  theme: any
}

export const Container = styled.div`
  div {
    background-image:${`url(${like_animation_image})`};
    background-position: left;
    background-repeat:no-repeat;
    background-size:2900%;  
    animation: ${(props:heart) => props.isAnimating ? burst : null} .8s steps(28) 1;
    transform: scale(2.8);  
  }
`