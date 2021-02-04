import React from 'react'

import { featuredIcon } from '../../../assets/icons/project'
// items
import { Title, Icon } from './FeaturedTitleStyle'

interface props {
    iconOnly?: boolean
}

export default ({ iconOnly }: props) => {
    if (iconOnly) return <Icon>{featuredIcon}</Icon>
    return (
        <Title>
            <span>Featured Project</span>
            <Icon>{featuredIcon}</Icon>
        </Title>
    )
}