import React, { useState } from 'react'

import { useQuery } from '@apollo/client';
import { useUpdateProject } from '../../../../hooks'
import { GET_PROJECT_BY_PK } from '../../../../graphql/project'
import { ProjectReturn } from '../../../../types/site'
import { appRoutes } from '../../../../utils/routes'
import { websiteIcon } from '../../../../assets/icons/project';
import { languageUrl } from '../../../../assets/language';
import { githubIcon } from '../../../../assets/icons/project'
import { timeAgo } from '../../../../utils/helpers/date'
// items
import { SubScreenContainer } from '../../../../components/common'
import { NoProject } from './components'
import { Carousel, CenterDiv, LikeAnimation } from '../../../../components/widgets'
import { FeaturedTitle } from '../../../../components/project'
import { Content, Stacks, Flex, Language, SiteContainer, Grid, Sites, DateAdded } from './ProjectStyle'

export default (props: any) => {
    const [project, setProject] = useState<ProjectReturn>()
    const [timesClick, setTimesClick] = useState(0)
    const name = props.match.params.name.replace('-', ' ')

    const { projectLiked, updateProj, setLikedProjects,
        toggleLikeVariables,
    } = useUpdateProject(name)
    const { loading } = useQuery(GET_PROJECT_BY_PK, {
        variables: {
            name
        },
        onCompleted: (data: any) => {
            setProject(data.project_by_pk)
        },
        onError: (err) => {
            console.log(err);
        }
    });

    const handleLikeToggle = () => {
        if (!project) return
        setTimesClick(prev => prev + 1)
        const [update] = updateProj

        update({ variables: { ...toggleLikeVariables() } })
            .then((d: any) => {
                setLikedProjects()
                setProject(d.data.update_project_by_pk)
                return
            })
            .catch((err) => {
                console.error('Toggle like error', err)
            })
    }

    return (
        <SubScreenContainer
            rightContent={project && (
                <LikeAnimation
                    isLiked={projectLiked}
                    handleLikeToggle={handleLikeToggle}
                    disabled={timesClick === 5}
                />
            )}
            defaultPrevUrl={appRoutes.archive}
            pageTitle={name}
            title={name}
            loading={loading}
        >
            <Content>
                {project ?
                    <div>
                        {project?.images && (
                            <Carousel
                                data={project.images}
                                name={name}
                            />
                        )}
                        {project?.is_featured && <FeaturedTitle />}
                        <h1>{project?.title}</h1>
                        <p>{project?.description}</p>
                        <Stacks>
                            <h2>Technology stacks:</h2>
                            <Flex>
                                {project?.languages.map((lang: string, i: number) => (
                                    <Language key={i}>
                                        <img src={languageUrl(lang)} alt={lang}/>
                                        <CenterDiv>{lang}</CenterDiv>
                                    </Language>
                                ))}
                            </Flex>
                        </Stacks>
                        {project?.github || project?.website ? (
                            <SiteContainer>
                                <Grid>
                                    {project?.github && (
                                        <Sites
                                            type={'github'}
                                            project={project}
                                        >
                                            <CenterDiv>{githubIcon}</CenterDiv>
                                            <CenterDiv>Github</CenterDiv>
                                        </Sites>
                                    )}
                                    {project?.website && (
                                        <Sites
                                            type={'website'}
                                            project={project}
                                        >
                                            <CenterDiv>{websiteIcon}</CenterDiv>
                                            <CenterDiv>Website</CenterDiv>
                                        </Sites>
                                    )}
                                </Grid>
                            </SiteContainer>
                        ) : null}
                        {project?.created_at && (
                            <DateAdded>
                                <span>{`Added ${timeAgo(project.created_at)}`}</span>
                            </DateAdded>
                        )}
                    </div>
                    :
                    <NoProject name={name} />
                }
            </Content>
        </SubScreenContainer>
    )
}