import React from 'react'
import { ProjectReturn } from '../../../types/site';
import { LinkButton } from '../../widgets'

import { linkIcon, websiteIcon } from '../../../assets/icons/project'
import { githubIcon } from '../../../assets/icons/project'
import { appProjectRoute } from '../../../utils/routes';
// import { useUpdateProject } from '../../../hooks';

interface props {
  type: 'page' | 'website' | 'github';
  project: ProjectReturn;
  simple?: boolean;
  children?: any
}

export default ({ type, project, simple, children, ...rest }: props) => {
  // const [timesClick, setTimesClick] = useState({
  //   page: 0,
  //   github: 0,
  //   site: 0
  // })

  // const { updateProj, pageVariables, githubVariables, siteVariables
  // } = useUpdateProject(project.name)

  let p = {
    to: '',
    newTab: true
  }
  let icon

  if (type === 'page') {
    p.to = appProjectRoute(project.name!)
    p.newTab = false
    icon = linkIcon
  } else if (type === 'website') {
    p.to = project.website!
    icon = websiteIcon
  } else if (type === 'github') {
    p.to = project.github!
    icon = githubIcon
  }

  const handleUpdateClicks = (type: string) => {
    if (!project) return
    
    // const [update] = updateProj
    // if (type === 'page') {
    //   // ------------------
    //   setTimesClick({ ...timesClick, page: timesClick.page + 1 })
    //   if (timesClick.page > 0) return
    //   update({ variables: { ...pageVariables() } })

    // } else if (type === 'github') {
    //   // ------------------
    //   setTimesClick({ ...timesClick, github: timesClick.github + 1 })
    //   if (timesClick.github > 0) return
    //   update({ variables: { ...githubVariables() } })

    // } else if (type === 'website') {
    //   // ------------------
    //   setTimesClick({ ...timesClick, site: timesClick.site + 1 })
    //   if (timesClick.site > 0) return
    //   update({ variables: { ...siteVariables() } })
    // }
  }

  return (
    <LinkButton {...p} {...rest} onClick={handleUpdateClicks}>
      {simple ? icon : children}
    </LinkButton>
  )
}