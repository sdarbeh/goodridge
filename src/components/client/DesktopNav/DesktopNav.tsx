import React from 'react'
import { NavLink } from "react-router-dom";

import { resumePDF } from '../../../assets/public'
import { routeActive } from '../../../utils/helpers/methods'

import { HomeIcon, PortfolioIcon, ContactIcon, SocialIcon, themeIcon } from '../../../assets/navigation/navigation'
import { resumeIcon } from '../../../assets/icons/widgets'
import { useThemeMode } from '../../../hooks/theme'

// items
import { LinkButton } from '../../widgets'
import { Navigation, NavItem, Metadata } from './DesktopNavStyle'

export default ({ appRoutes, path, openTheme, metadata }: any) => {
    const { home, archive, contact, socials } = appRoutes

    const { currentThemeMode } = useThemeMode();

    return (
        <Navigation>
            <NavItem active={routeActive(home, path)}>
                <NavLink to={home}>
                    <span>About</span>
                    <HomeIcon active={routeActive(home, path)} />
                </NavLink>
            </NavItem>
            <NavItem active={routeActive(archive, path)}>
                <NavLink to={archive}>
                    <span>Archive</span>
                    <PortfolioIcon active={routeActive(archive, path)} />
                </NavLink>
            </NavItem>
            <NavItem active={routeActive(contact, path)}>
                <NavLink to={contact}>
                    <span>Contact</span>
                    <ContactIcon active={routeActive(contact, path)} />
                </NavLink>
            </NavItem>
            <NavItem active={routeActive(socials, path)}>
                <NavLink to={socials}>
                    <span>Socials</span>
                    <SocialIcon active={routeActive(socials, path)} />
                </NavLink>
            </NavItem>
            <NavItem active={0}>
                <LinkButton to={resumePDF} newTab>
                    <span>Resume</span>
                    {resumeIcon}
                </LinkButton>
            </NavItem>
            <NavItem active={0}>
                <button onClick={openTheme}>
                    <span>Theme</span>
                    {themeIcon(currentThemeMode)}
                </button>
            </NavItem>
            {metadata && (
                <Metadata>
                    <span>{`v${metadata.version}`}</span>
                </Metadata>
            )}
        </Navigation>
    )
}