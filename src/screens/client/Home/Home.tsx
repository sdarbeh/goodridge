import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

// graghql
import { useQuery } from '@apollo/client';
import { GET_SITE_DATA } from '../../../graphql/site';

import { SiteReturn, ProjectReturn } from '../../../types/site'
import { appRoutes } from '../../../utils/routes'
import { mailIcon } from '../../../assets/icons/widgets'
import { timeOfDay } from '../../../utils/helpers/date'

// items
import { ClientContainer } from '../../../components/client'
import { Card } from '../../../components/project';
import { CenterDiv } from '../../../components/widgets'
import { Content, Intro, Divider, SectionTitle, Section, About, ExtendedTitle, Contact, ContactEmail, ProjectContainer } from './HomeStyle'
import { FullScreenLoader, EmptyContent } from '../../../components/widgets'

export default () => {
    const [loading, setLoading] = useState(true)
    const [site, setSite] = useState<SiteReturn>()
    const [projects, setProjects] = useState<ProjectReturn[]>([])
    const [noData, setNoData] = useState(false)

    const {error} = useQuery(GET_SITE_DATA, {
        fetchPolicy: 'no-cache',
        onCompleted: (data: any) => {
            setLoading(false)
            if (!data?.project || !data?.site_data[0]) {
                setNoData(true)
                return
            }

            const siteData = data?.site_data[0]
            const projs = data?.project

            setSite(siteData)
            setProjects(projs)
        }
    });

    if (loading) return <FullScreenLoader />

    return (
        <ClientContainer
            pageTitle={'About'}
            error={error || noData}
        >
            <Content>
                <Intro>
                    <div>
                        <span>Hello, my name is</span>
                        <h1>Sam Goodridge</h1>
                        <h2>{site?.intro_slogan}</h2>
                        <p>{site?.job_title}</p>
                    </div>
                    <NavLink to={appRoutes.contact}>
                        <span>Get In Touch</span>
                    </NavLink>
                </Intro>
                <Divider />
                <About>
                    <SectionTitle>About&nbsp;me</SectionTitle>
                    <div>
                        <p>{`${timeOfDay()}, ${site?.job_description}`}</p>
                        <p>{site?.recent_activities}</p>
                    </div>
                    <h4>Here are a few technologies I've been using recently:</h4>
                    <ul>
                        {site?.recent_languages?.map((lang: string, i: number) => (
                            <li key={i}>{lang}</li>
                        ))}
                    </ul>
                </About>
                <Divider />
                <Section>
                    <SectionTitle>Portfolio</SectionTitle>
                    {projects.length ?
                        <ProjectContainer>
                            {projects.filter(p => p.is_featured).map((project, i) => (
                                <Card
                                    key={i}
                                    project={project}
                                />
                            ))
                            }
                        </ProjectContainer>
                        :
                        <EmptyContent />
                    }
                    <Section>
                        <ExtendedTitle>
                            <h4>More notable projects</h4>
                            <NavLink to={appRoutes.archive}>
                                <span>view the archive</span>
                            </NavLink>
                        </ExtendedTitle>
                    </Section>
                </Section>
                <Divider />
                <Contact>
                    <SectionTitle>Contact</SectionTitle>
                    <ContactEmail href="mailto:hello@goodridge.io?subject=Hello,%20Sam!">
                        <CenterDiv>{mailIcon}</CenterDiv>
                        <div>hello@goodridge.io</div>
                    </ContactEmail>
                    <div>
                        <p>{site?.work_status}</p>
                        <NavLink to={appRoutes.contact}>
                            <span>Get In Touch!</span>
                        </NavLink>
                    </div>
                    <div>
                        <h4>Sam Goodridge Darbeh</h4>
                        <p>Tulsa, Oklahoma</p>
                    </div>
                </Contact>
            </Content>
        </ClientContainer>
    )
}