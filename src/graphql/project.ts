import { gql } from '@apollo/client';

// ---------------- META

export const featuredProjectsQuery = `
    project(where: {is_featured: {_eq: true}}, order_by: {created_at: desc}) {
        id
        name
        description
        website
        github
        languages
        is_featured
        created_at
    }
`

export const GET_FEATURED_PROJECTS = gql`
    query {
        ${featuredProjectsQuery}
    }
`

export const GET_PROJECTS = gql`
    query project($offset: Int, $limit: Int, $order: order_by!, $query: String,) {
        project(offset: $offset,
         limit: $limit, 
         order_by: {created_at: $order},
         where: {name: {_ilike: $query}}
         ) {
            id
            name
            title
            description
            website
            github
            languages
            is_featured
            created_at
        }
        project_aggregate(where: {name: {_ilike: $query}}) {
            aggregate {
                count
            }
        }
    }
`

export const GET_PROJECTS_LIST_VIEW = gql`
    query project($offset: Int, $limit: Int, $order: order_by!, $query: String,) {
        project(offset: $offset,
        limit: $limit, 
        order_by: {created_at: $order},
        where: {name: {_ilike: $query}}
        ) {
            id
            name
            website
            github
            languages
            is_featured
            created_at
        }
        project_aggregate(where: {name: {_ilike: $query}}) {
            aggregate {
                count
            }
        }
    }
`

export const GET_PROJECTS_MIN = gql`
    query project($offset: Int, $limit: Int, $order: order_by!) {
        project(offset: $offset, limit: $limit, order_by: {created_at: $order}) {
            id
            title
            website
            github
            is_featured
            created_at
        }
        project_aggregate {
            aggregate {
                count
            }
        }
    }
`

export const GET_PROJECT_BY_PK = gql`
    query project_by_pk($name: String!) {
        project_by_pk(name: $name) {
            id
            name
            title
            is_featured
            description
            languages
            github
            website
            likes
            github_clicks
            page_clicks
            website_clicks
            images
            created_at
        }
    }
`

export const GET_SIMILAR_PROJECT_NAME = gql`
    query project($name: String!) {
        project(where: {name: {_ilike: $name}}) {
            id
            name
        }
    }
`

export const UPDATE_PROJECT_CLICKS_BY_PK = gql`
    mutation project(
        $name: String!,  
        $likes: numeric, 
        $github_clicks: numeric,
        $page_clicks: numeric, 
        $website_clicks: numeric
        ){
        update_project_by_pk(pk_columns: 
            {name: $name}, 
            _inc: { 
                likes: $likes, 
                github_clicks: $github_clicks, 
                page_clicks: $page_clicks, 
                website_clicks: $website_clicks}
            ){
            id
            name
            title
            is_featured
            description
            languages
            github
            website
            likes
            github_clicks
            page_clicks
            website_clicks
            images
            created_at
        }
    }
`