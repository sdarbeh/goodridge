import React from 'react'
import { moji_selfies } from '../../../../assets/public'
// items
import { Container, ImageContainer, MessageContainer, Message } from './EmptyContentStyle'

interface props {
    message?: any;
}

export default ({ message, ...rest }: props) => (
    <Container {...rest}>
        <div>
            <ImageContainer>
                <img
                    src={moji_selfies[2].src}
                    alt={`${moji_selfies[2].name} | Goodridge.io`}
                />
            </ImageContainer>
            <MessageContainer>
                {message ? message : <Message>Wow, such empty</Message>}
            </MessageContainer>
        </div>
    </Container>
)