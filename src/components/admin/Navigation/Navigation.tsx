import React from 'react'
import { withRouter } from "react-router";

import { adminRoutes } from '../../../utils/routes'

import { DashboardIcon, SiteIcon, ProjectIcon, MessagesIcon } from '../../../assets/navigation/navigation'
import { routeActive } from '../../../utils/helpers/methods'
//items
import { Container, Nav, NavItem } from './NavigationStyle'

export default withRouter(({ match: { path } }: any) => {

  return (
    <Container>
      <Nav>
        <NavItem
          to={adminRoutes.dashboard}
          active={routeActive(adminRoutes.dashboard, path)}
        >
          <div>
            <DashboardIcon active={routeActive(adminRoutes.dashboard, path)} />
          </div>
          <span>Dashboard</span>
        </NavItem>
        <NavItem
          to={adminRoutes.site}
          active={routeActive(adminRoutes.site, path)}
        >
          <div>
            <SiteIcon active={routeActive(adminRoutes.site, path)} />
          </div>
          <span>Site</span>
        </NavItem>
        <NavItem
          to={adminRoutes.projects}
          active={routeActive(adminRoutes.projects, path)}
        >
          <div>
            <ProjectIcon active={routeActive(adminRoutes.projects, path)} />
          </div>
          <span>Projects</span>
        </NavItem>
        <NavItem
          to={adminRoutes.messages}
          active={routeActive(adminRoutes.messages, path)}
        >
          <div>
            <MessagesIcon active={routeActive(adminRoutes.messages, path)} />
          </div>
          <span>Messages</span>
        </NavItem>
      </Nav>
    </Container>
  )
})