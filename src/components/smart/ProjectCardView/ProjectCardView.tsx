import React from 'react'

import { ProjectReturn } from '../../../types/site'
// items
import { InfiniteScroll } from '../index'
import { Card } from '../../project'
// import { Container } from './ProjectCardViewStyle'

interface props {
    projects: ProjectReturn[];
    onNext: any;
    hasMore: boolean;
    onRefresh: any;
}

export default ({ projects, onNext, hasMore, onRefresh }: props) => {
    return (
        <InfiniteScroll
            length={projects.length}
            onNext={onNext}
            hasMore={hasMore}
            onRefresh={onRefresh}
            items={projects.map(project => (
                <Card
                    key={project.id}
                    project={project}
                />
            ))}
        />
    )
}