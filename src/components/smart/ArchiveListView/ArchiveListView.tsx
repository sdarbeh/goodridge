import React from 'react'

import { ProjectReturn } from '../../../types/site'
// items
import { InfiniteScroll } from '../index'
import { FeaturedTitle } from '../../project'
import { CenterDiv } from '../../widgets'
import { Title, Table, Thead, ProjectTitle, ProjectIcons } from './ArchiveListViewStyle'

interface props {
    projects: ProjectReturn[];
    onNext: any;
    hasMore: boolean;
    onRefresh: any;
    hideEndMessage: boolean;
}

export default ({ projects, onNext, hasMore, onRefresh, hideEndMessage }: props) => {
    return (
        <div>
            <Title>
                <div>Year</div>
                <div>Title</div>
                <div>Links</div>
            </Title>
            <InfiniteScroll
                length={projects.length}
                onNext={onNext}
                hasMore={hasMore}
                onRefresh={onRefresh}
                hideEndMessage={hideEndMessage}
                items={<Table>
                    {projects.map(project => (
                        <Thead key={project.id} featured={project.is_featured}>
                            <tr>
                                <td>{new Date(project.created_at).getFullYear()}</td>
                                <td>
                                    {project.is_featured ?
                                        <ProjectTitle>
                                            <CenterDiv>
                                                <FeaturedTitle iconOnly />
                                            </CenterDiv>
                                            <div>{project.name}</div>
                                        </ProjectTitle>
                                        :
                                        <div>{project.name}</div>
                                    }
                                </td>
                                <td>
                                    <ProjectIcons project={project} hideLangs />
                                </td>
                            </tr>
                        </Thead>
                    ))}
                </Table>}
            />
        </div>
    )
}