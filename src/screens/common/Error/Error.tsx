import React from 'react'
import { mailIcon } from '../../../assets/icons/widgets'

import { moji_err } from '../../../assets/public'
// items
import { PageTitle } from '../../../components/common'
import { Container, Content, ImgContainer, Message, Contact } from './ErrorStyle'

export default () => {
  return (
    <Container>
      <PageTitle title={'Oops, Error'} />
      <Content>
        <ImgContainer>
          <img src={moji_err.err} alt="err" />
        </ImgContainer>
        <h1>Ooops!</h1>
        <Message>
          <h2>An error occured :(</h2>
          <button onClick={() => window.location.reload()} aria-label={'reload page'}>
            <span>Reload page</span>
          </button>
        </Message>
      </Content>
      <Contact>
        <h3>Email:&nbsp;</h3>
        <a href="mailto:hello@goodridge.io?subject=Hello,%20Sam!">{mailIcon}</a>
      </Contact>
    </Container>
  )
}