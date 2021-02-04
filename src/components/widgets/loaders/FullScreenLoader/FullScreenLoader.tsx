import React from 'react'

import { moji_loaders } from '../../../../assets/public'
// items
import { Ellipsis } from '../../index'
import { Container, Moji, Message } from './FullScreenLoaderStyle'

const ranNum = Math.floor(Math.random() * (moji_loaders.length - 0) + 0)

export default () => (
    <Container>
        <Ellipsis />
        <Moji>
            <img src={moji_loaders[ranNum].src} alt={`${moji_loaders[ranNum].name} | Loading`}/>
        </Moji>
        <Message>Finding awesome stuff</Message>
    </Container>
)