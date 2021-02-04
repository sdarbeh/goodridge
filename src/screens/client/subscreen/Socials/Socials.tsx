import React, { useState } from 'react'

import { useQuery } from '@apollo/client'
import { GET_SOCIALS } from '../../../../graphql/social'
import { SocialReturn } from '../../../../types/site'
// items
import { Logo, SubScreenContainer } from '../../../../components/common'
import { InfiniteScroll } from '../../../../components/smart'
import { Ellipsis } from '../../../../components/widgets'
import { Content, Handle, CenteredFixed, SocialItem } from './SocialsStyle'

export default (props: any) => {
    const [socials, setSocials] = useState<SocialReturn[]>([])
    const [paginate, setPaginate] = useState({
        offset: 0,
        limit: 10,
        hasMore: true,
    })

    const { loading, refetch, fetchMore, error } = useQuery(GET_SOCIALS, {
        notifyOnNetworkStatusChange: true,
        onCompleted: (data: any) => {
            const amount = data.social.length
            setPaginate({
                ...paginate,
                offset: amount,
                hasMore: amount !== 0 && amount < data.site_data_aggregate.aggregate.count
            })
            setSocials(data.social)
        },
    });

    const handleFetch = () => {
        if (!paginate.hasMore) return
        fetchMore({})
    }

    const handleRefresh = () => {
        setPaginate({ ...paginate, offset: 0, hasMore: true })
        refetch()
    }

    return (
        <SubScreenContainer
            defaultPrevUrl={'/'}
            pageTitle={'Socials'}
            title={'Socials'}
        >
            <Content>
                <Handle>
                    <Logo />
                    <h1>Sam Goodridge</h1>
                    <span>Let's connect! Here's a list of a my social links.</span>
                </Handle>
                {loading && (
                    <CenteredFixed>
                        <Ellipsis />
                    </CenteredFixed>
                )}
                {!loading && socials && (
                    <InfiniteScroll
                        length={socials.length}
                        onNext={handleFetch}
                        hasMore={paginate.hasMore}
                        onRefresh={handleRefresh}
                        hideEndMessage={socials.length < paginate.limit}
                        items={socials.map((s:SocialReturn, i) => (
                            <SocialItem key={i} social={s} />
                        ))}
                    />
                )}
                {!loading && error && (
                    <CenteredFixed>
                        <span>Error</span>
                    </CenteredFixed>
                )}
            </Content>
        </SubScreenContainer>
    )
}