import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { appRoutes } from './utils/routes'

import { ContactRoute } from './gaurds'
// client
import { Home, Archive, Project, Contact, Socials, Message } from './screens/client'
// admin
// import { Login, Dashboard, Site, Projects, Messages } from './screens/admin'
import { NotFoundScreen } from './screens/common'

export default () => {
  return (
    <Router>
      <Switch>
        <Route path={appRoutes.home} exact component={Home} />
        <Route path={appRoutes.archive} exact component={Archive} />
        <Route path={appRoutes.archive + '/:name'} exact component={Project} />
        <ContactRoute path={appRoutes.contact} exact component={Contact} />
        <Route path={appRoutes.contact + '/:id'} exact component={Message} />
        <Route path={appRoutes.socials} exact component={Socials} />

        {/* <AdminRoute path={adminRoutes.admin} logginRoute exact component={Login} />
        <AdminRoute path={adminRoutes.dashboard} exact component={Dashboard} />
        <AdminRoute path={adminRoutes.site} exact component={Site} />
        <AdminRoute path={adminRoutes.projects} exact component={Projects} />
        <AdminRoute path={adminRoutes.messages} exact component={Messages} /> */}
        <Route path={'*'} component={NotFoundScreen} />
      </Switch>
    </Router>
  );
}