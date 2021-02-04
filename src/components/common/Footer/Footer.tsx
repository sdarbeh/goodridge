import React from 'react'
import { NavLink } from "react-router-dom";

import { useThemeColor } from '../../../hooks/theme'
// items
import { Footer, Nav, Copyright } from './FooterStyle'

interface p {
    appRoutes: any;
    metadata?: any;
}

export default ({ appRoutes, metadata, ...rest }: p) => {
    const { currentThemeColor } = useThemeColor()
    return (
        <Footer {...rest}>
            <Nav>
                <li>
                    <NavLink to={appRoutes.home} activeStyle={{ color: currentThemeColor }}>
                        <span>About</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={appRoutes.archive} activeStyle={{ color: currentThemeColor }}>
                        <span>Portfolio</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={appRoutes.contact} activeStyle={{ color: currentThemeColor }}>
                        <span>Contact</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={appRoutes.socials} activeStyle={{ color: currentThemeColor }}>
                        <span>Socials</span>
                    </NavLink>
                </li>
            </Nav>
            <Copyright>
                <div>
                    <span>Finger-crafted&nbsp;by&nbsp;me&nbsp;&copy;</span>
                    <span>{new Date().getFullYear().toString().substr(-2) + "'"}</span>
                </div>
                {metadata && <div>{`${metadata.app_name} v${metadata.version}`}</div>}
            </Copyright>
        </Footer>
    )
}