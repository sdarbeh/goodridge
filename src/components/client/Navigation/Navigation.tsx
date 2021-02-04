import React from 'react';
import { withRouter } from "react-router";

import { hamburgerMenuIcon, xIcon, searchIcon } from '../../../assets/icons/widgets'
// items
import { Header, DesktopNav } from '../index'
import { Logo } from '../../common/index'
import { NavModal } from '../../modal'
import { Content, LogoContainer, SearchContainer, Hamburger, CloseIcon } from './NavigationStyle'

export default withRouter((props: any) => {
    const { match: { path }, appRoutes, navActive, setNavActive, openTheme, searchProps, isDesktop, metadata } = props
    return (
        <Header withDesktopBg={searchProps ? 1 : 0}>
            <Content>
                <LogoContainer to={'/'}>
                    <Logo />
                </LogoContainer>
                <div>
                    {searchProps && (
                        <SearchContainer>
                            { searchIcon}
                            <input
                                type="text"
                                placeholder={searchProps.placeholder}
                                value={searchProps.value}
                                onChange={searchProps.onChange}
                            />
                        </SearchContainer>
                    )}
                </div>
                <Hamburger onClick={setNavActive} aria-label={'Navigation'}>
                    {navActive && <CloseIcon>{xIcon}</CloseIcon>}
                    {!navActive && hamburgerMenuIcon}
                </Hamburger>

                {navActive && isDesktop && (
                    <DesktopNav
                        appRoutes={appRoutes}
                        path={path}
                        metadata={metadata}
                        openTheme={() => {
                            openTheme()
                            setNavActive()
                        }}
                    />
                )}
            </Content>
            { navActive && !isDesktop && (
                <NavModal
                    appRoutes={appRoutes}
                    path={path}
                    handleClose={setNavActive}
                    metadata={metadata}
                    openTheme={() => {
                        openTheme()
                        setNavActive()
                    }}
                />
            )}
        </Header>
    )
})