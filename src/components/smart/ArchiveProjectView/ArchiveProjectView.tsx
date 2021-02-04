import React from 'react'

// items
import { ArchiveListView, ProjectCardView } from '../index'
import { NoProjects } from './ArchiveProjectViewStyle'

export default ({ display, projects, handleFetch, paginate, handleRefresh, hideEndMessage }: any) => {

  if (!projects.length) {
    return (
      <NoProjects><span>Hmmm, no projects to display</span></NoProjects>
    )
  } else if (display === 'list') {
    return (
      <ArchiveListView
        projects={projects}
        onNext={handleFetch}
        hasMore={paginate.hasMore}
        onRefresh={handleRefresh}
        hideEndMessage={hideEndMessage}
      />
    )
  } else {
    return (
      <ProjectCardView
        projects={projects}
        onNext={handleFetch}
        hasMore={paginate.hasMore}
        onRefresh={handleRefresh}
      />
    )
  }
}