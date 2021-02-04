import { gql } from '@apollo/client';
import { featuredProjectsQuery } from './project'

// ---------------- META
export const metaDataQuery = `
  meta_data {
    app_name
    version
  }
`

export const siteQuery = `
  site_data {
    intro_slogan
    job_title
    job_description
    recent_activities
    recent_languages
    work_status
  }
`

export const GET_META_DATA = gql`
    query {
        ${metaDataQuery}
    }
`

export const GET_SITE_DATA = gql`
  query {
    ${siteQuery}
    ${featuredProjectsQuery}
  }
`
