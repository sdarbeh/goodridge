import React from "react";
import { Route, Redirect } from 'react-router-dom';

import { useLoginAdmin } from '../hooks'
import { adminRoutes } from '../utils/routes'

// Contact protected route
export default ({ component: Component, logginRoute, ...rest }: any) => {
    const { state } = useLoginAdmin()
    
    return (
        <Route {...rest} render={
            (props: any) => {
                if (!state) {
                    return <Redirect to={adminRoutes.admin} />
                } else {
                    if (logginRoute) return <Redirect to={adminRoutes.dashboard} />
                    return <Component {...rest} {...props} />
                }
            }
        } />
    )
}