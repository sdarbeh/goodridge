import React, {useEffect} from 'react';
import { withRouter } from 'react-router';

import { PageTitle } from '../../../components/common'
import { backArrowIcon } from '../../../assets/icons/widgets'
// items
import { Header } from '../../client'
import { Ellipsis, LinkButton } from '../../widgets'
import { Container, HeadContent, Content, Loading } from './SubScreenContainerStyle'

// interface props {
//   backTo: string;
//   children: any;
//   pageTitle: string;
//   title: string;
//   loading: boolean;
// }

export default withRouter (({ location, rightContent, defaultPrevUrl, children, pageTitle, title, loading, staticContext, ...rest }: any) => {
  const prevUrl = location.state
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Container {...rest}>
      <PageTitle title={pageTitle} />
      <Header>
        <HeadContent>
          <LinkButton to={prevUrl ? prevUrl : defaultPrevUrl}>{backArrowIcon}</LinkButton>
          <div>
            <h1>{title}</h1>
          </div>
          {rightContent && rightContent}
        </HeadContent>
      </Header>
      <Content>
        { !loading ? children : <Loading><Ellipsis /></Loading> }
      </Content>
    </Container>
  );
})