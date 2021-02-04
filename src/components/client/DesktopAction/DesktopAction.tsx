import React, { useState } from "react";
import { useQuery } from '@apollo/client'
import { GET_SOCIALS_HOME } from '../../../graphql/social'
import { SocialReturn } from "../../../types/site";

import { leftArrowIcon } from '../../../assets/icons/widgets'
// items
import { Left, Right, SocialContainer } from './DesktopActionStyle'
import { SocialLite } from "../../social";

export default () => {
    const [expanded, setExpanded] = useState(true)
    const [socials, setSocials] = useState<SocialReturn[]>([])

    const { error } = useQuery(GET_SOCIALS_HOME, {
        onCompleted: (data: any) => {
            setSocials(data.social)
        },
    })

    return (
        <>
            <Left>
                <a href="mailto:hello@goodridge.io?subject=Hello,%20Sam!">hello@goodridge.io</a>
            </Left>
            <Right expanded={expanded}>
                <SocialContainer
                    expanded={expanded}
                    length={socials.length}
                >
                    {socials.map((s: any, i) => (
                        <SocialLite key={i} social={s} />
                    ))}
                </SocialContainer>
                {!error && socials.length > 0 && (
                    <button onClick={() => setExpanded(prev => !prev)}>
                        {leftArrowIcon}
                    </button>
                )}
            </Right>
        </>
    )
}