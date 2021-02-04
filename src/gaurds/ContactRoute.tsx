import React from "react";
import { Route, Redirect } from 'react-router-dom';
import Cookies from "js-cookie";
import { message_cookie } from "../utils/constants/app";
import { appRoutes } from '../utils/routes'

// Contact protected route
export default ({ component: Component, ...rest }: any) => {
    const msgId = Cookies.get(message_cookie)
    return (
        <Route {...rest} render={
            (props: any) => {
                if (msgId) {
                    return <Redirect to={`${appRoutes.contact}/${msgId}`} />
                } else {
                    return <Component {...rest} {...props} />
                }
            }
        } />
      )
}