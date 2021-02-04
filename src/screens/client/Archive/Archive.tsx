import React, { useState } from 'react'

// graghql
import { useQuery } from '@apollo/client';
// import Get projects for future card view feature
import { GET_PROJECTS_LIST_VIEW } from '../../../graphql/project'

import { ProjectReturn } from '../../../types/site'
import { useArchiveView } from '../../../hooks'
// items
import { ClientContainer } from '../../../components/client'
import { Ellipsis, CenterDiv } from '../../../components/widgets'
import { ArchiveAction, ArchiveProjectView } from '../../../components/smart'
import { Content, Title } from './ArchiveStyle'

export default () => {
    const { sort, display, setSort, setDisplay } = useArchiveView()

    const [projects, setProjects] = useState<ProjectReturn[]>([])
    const [query, setQuery] = useState('')
    // const [order, setOrder] = useState('asc')
    const [paginate, setPaginate] = useState({
        offset: 0,
        limit: 15,
        hasMore: true,
    })

    // useEffect(() => {
    //     if (sort === 'oldest') {
    //         setOrder('asc')
    //         return
    //     }
    //     setOrder('desc')
    // }, [])

    let variables = {
        offset: paginate.offset,
        limit: paginate.limit,
        order: 'desc',
        query: `%${query}%`,
    }

    const { loading, refetch, fetchMore, error } = useQuery(GET_PROJECTS_LIST_VIEW, {
        variables,
        notifyOnNetworkStatusChange: true,
        onCompleted: (data: any) => {
            const amount = data.project.length
            setPaginate({
                ...paginate,
                offset: amount,
                hasMore: amount !== 0 && amount < data.project_aggregate.aggregate.count
            })
            setProjects(data.project)
        },
        onError: (err) => {
            console.log(err);
        }
    });

    const handleFetch = () => {
        if (!paginate.hasMore) return
        fetchMore({
            variables
        })
    }

    const handleRefresh = () => {
        setPaginate({ ...paginate, offset: 0, hasMore: true })
        refetch()
    }

    const handleSetSort = (sort: string) => {
        setProjects([])
        setSort(sort)
        refetch()
    }

    return (
        <ClientContainer
            pageTitle={'Archive'}
            hideFooter
            searchProps={{
                active: false,
                placeholder: 'Search archive...',
                value: query,
                onChange: (e: any) => setQuery(e.target.value)
            }}
            error={error}
        >
            <Content>
                <Title>
                    <h1>Archive</h1>
                    <span>Complete section of projects I developed.</span>
                </Title>
                <ArchiveAction
                    sort={sort}
                    display={display}
                    handleSortChange={handleSetSort}
                    handleDisplayChange={() => setDisplay()}
                />
                {!loading ?
                    <ArchiveProjectView
                        display={display}
                        projects={projects}
                        handleFetch={handleFetch}
                        paginate={paginate}
                        handleRefresh={handleRefresh}
                        hideEndMessage={projects.length < paginate.limit}
                    />
                    :
                    <CenterDiv>
                        <Ellipsis />
                    </CenterDiv>
                }
            </Content>
        </ClientContainer>
    )
}