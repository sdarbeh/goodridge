import React, { useState } from 'react';
import { appRoutes } from '../../../utils/routes'

import { PageTitle } from '../../../components/common'
// graghql
import { useQuery } from '@apollo/client';
import { GET_META_DATA } from '../../../graphql/site'
import { MetadataReturn } from '../../../types/site'

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { device } from '../../../utils/constants/mediaQueries';

// items
import { ErrorScreen } from '../../../screens/common'
import { ThemeModal } from '../../modal'
import { Navigation, DesktopAction } from '../index'
import { Footer } from '../../common'
import { Container, Content } from './ClientContainerStyle'

interface props {
  children: any;
  pageTitle: string;
  searchProps?: any;
  hideFooter?: boolean;
  error?: any;
}

export default ({ children, pageTitle, searchProps, hideFooter, error }: props) => {
  const matches = useMediaQuery(device.laptop);

  const [metadata, setMetadata] = useState<MetadataReturn>()
  const [themeActive, setThemeActive] = useState(false)
  const [navActive, setNavActive] = useState(false)

  useQuery(GET_META_DATA, {
    onCompleted: (data: any) => {
      window.scrollTo(0, 0)
      setMetadata(data.meta_data[0])
    },
  })

  if (error) {
    console.error({
      error,
      from: pageTitle + ' screen'
    })
    return <ErrorScreen />
  }

  return (
    <Container>
      <PageTitle title={pageTitle} />
      <Navigation
        appRoutes={appRoutes}
        navActive={navActive}
        setNavActive={() => setNavActive(prev => !prev)}
        openTheme={() => setThemeActive(true)}
        searchProps={searchProps?.active ? searchProps : null}
        isDesktop={matches}
        metadata={metadata}
      />
      <Content>
        {children}
      </Content>
      { !hideFooter && (
        <Footer 
          appRoutes={appRoutes} 
          metadata={metadata}
        />
      ) }
      {themeActive && (
        <ThemeModal handleClose={() => setThemeActive(false)} />
      )}
      {matches && (
        <DesktopAction />
      )}
    </Container>
  );
}