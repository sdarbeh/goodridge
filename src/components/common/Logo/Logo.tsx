import React from 'react'
import { moji_selfies } from '../../../assets/public'
// items
import { Container } from './LogoStyle'

const ranNum = Math.floor(Math.random() * (moji_selfies.length - 0) + 0)

export default ({ props }: any) => {
    return (
        <Container>
            <img
                src={moji_selfies[ranNum].src}
                alt={`${moji_selfies[ranNum].name} | Goodridge.io`}
                width={'100%'}
                height={'100%'}
                {...props}
            />
        </Container>
    )
}