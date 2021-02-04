import React from 'react'
import { NavLink } from "react-router-dom";

import { resumePDF } from '../../../assets/public'
import { routeActive } from '../../../utils/helpers/methods'

import { HomeIcon, PortfolioIcon, ContactIcon, SocialIcon, themeIcon } from '../../../assets/navigation/navigation'
import { resumeIcon } from '../../../assets/icons/widgets'
import { useThemeMode } from '../../../hooks/theme'

// items
import { SideModal } from '../types'
import { CenterDiv, LinkButton } from '../../widgets'
import { Navigation, Title, ItemContent, NavItem, ThemeItem, Metadata } from './NavModalStyle'

export default ({ appRoutes, path, handleClose, openTheme, metadata }: any) => {
    const { home, archive, contact, socials } = appRoutes

    const { currentThemeMode } = useThemeMode();

    return (
        <SideModal handleClose={handleClose}>
            <Navigation>
                <Title>Navigation</Title>
                <ItemContent onClick={handleClose}>
                    <NavItem active={routeActive(home, path)}>
                        <NavLink to={home}>
                            <CenterDiv>
                                <HomeIcon active={routeActive(home, path)} />
                            </CenterDiv>
                            <CenterDiv>About</CenterDiv>
                        </NavLink>
                    </NavItem>
                    <NavItem active={routeActive(archive, path)}>
                        <NavLink to={archive}>
                            <PortfolioIcon active={routeActive(archive, path)} />
                            <CenterDiv>Portfolio</CenterDiv>
                        </NavLink>

                    </NavItem>
                    <NavItem active={routeActive(contact, path)}>
                        <NavLink to={contact}>
                            <CenterDiv>
                                <ContactIcon active={routeActive(contact, path)} />
                            </CenterDiv>
                            <CenterDiv>Contact</CenterDiv>
                        </NavLink>
                    </NavItem>
                    <NavItem active={routeActive(socials, path)}>
                        <NavLink to={socials}>
                            <CenterDiv>
                                <SocialIcon active={routeActive(socials, path)} />
                            </CenterDiv>
                            <CenterDiv>Socials</CenterDiv>
                        </NavLink>
                    </NavItem>
                </ItemContent>
                <Title>More</Title>
                <ItemContent onClick={handleClose}>
                    <NavItem active={false}>
                        <LinkButton to={resumePDF} newTab>
                            <CenterDiv>{resumeIcon}</CenterDiv>
                            <CenterDiv>Resume</CenterDiv>
                        </LinkButton>
                    </NavItem>
                </ItemContent>

                <ThemeItem>
                    <button onClick={openTheme}>
                        {themeIcon(currentThemeMode)}
                        <CenterDiv>Display</CenterDiv>
                    </button>
                </ThemeItem>

                {metadata && (
                    <Metadata>
                        <span>{`v${metadata.version}`}</span>
                    </Metadata>
                )}
            </Navigation>
        </SideModal>
    )
}