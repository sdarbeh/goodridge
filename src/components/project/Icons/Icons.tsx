import React from 'react';

import { linkIcon } from '../../../assets/icons/project'
import { languageUrl } from '../../../assets/language'
import { ProjectReturn } from '../../../types/site';
// items
import { SiteClickButtons } from '../index'
import { Container, Link } from './IconsStyle'

interface props {
    project: ProjectReturn;
    linkOnly?: boolean;
    hideLangs?: boolean;
}

export default ({ project, linkOnly, hideLangs, ...rest }: props) => (
    <Container {...rest}>
        { project.languages && !hideLangs && (
            <div>
                {project.languages.map((lang: string, i: number) => (
                    <span key={i}>
                        <img src={languageUrl(lang)} alt={lang}/>
                    </span>
                ))}
            </div>
        )}
        { !linkOnly ?
            <div>
                {project.website && (
                    <SiteClickButtons type={'website'} project={project} simple />
                )}
                {project.github && (
                    <SiteClickButtons type={'github'} project={project} simple />
                )}
                <SiteClickButtons type={'page'} project={project} simple />
            </div>
            :
            <Link>
                <SiteClickButtons type={'page'} project={project}>
                    <span>Open</span>
                    {linkIcon}
                </SiteClickButtons>
            </Link>
        }
    </Container>
)