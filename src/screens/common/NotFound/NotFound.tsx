import React from 'react'
import { NavLink } from 'react-router-dom'
import strSimilarity from 'string-similarity'

import { appRoutes } from '../../../utils/routes'
import { moji_err } from '../../../assets/public'
// items

import { Container, Content, Image, Msg, GoHome, Prediction, Foot } from './NotFoundStyle'
import { PageTitle } from '../../../components/common'
import { LinkButton } from '../../../components/widgets'

export default (props: any) => {
  const path = props.location.pathname

  const appRouteArr = () => {
    let arr = [];
    for (const r in appRoutes) {
      arr.push('/' + r);
    }
    return arr;
  }

  const matches = strSimilarity.findBestMatch(path, appRouteArr());

  return (
    <Container>
      <PageTitle title={'404'} />
      <Content>
        <Image>
          <img src={moji_err[404]} alt="Error" />
          <div />
        </Image>
        <div>
          <Msg>
            <h1>Errrrr...</h1>
            <h2>Congrats, you broke my site :/</h2>
            <div>
              <span>The page you're after doesn't exists.</span>
              {matches.bestMatch.rating >= 0.6 ?
                <Prediction>
                  <span>Did you mean to naviagte to&nbsp;</span>
                  <LinkButton to={matches.bestMatch.target}>
                    {matches.bestMatch.target.slice(1)}
                  </LinkButton>
                  <span>?</span>
                </Prediction>
                :
                <span>&nbsp;Use the footer naviagtion below to navigate to the right page.</span>
              }
            </div>
          </Msg>
        </div>
        <GoHome>
          <NavLink to={appRoutes.home}>
            <span>Return to homepage</span>
          </NavLink>
        </GoHome>
      </Content>
      <Foot appRoutes={appRoutes} />
    </Container>
  )
}