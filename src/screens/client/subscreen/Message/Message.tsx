import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { useMutation, useQuery } from '@apollo/client';
import { GET_MESSAGE_PK_CLIENT, UPDATE_MESSAGE_VISITS_PK } from '../../../../graphql/message'

import { MessageReturn } from '../../../../types/site'
import { timeOfDay, timeAgo } from '../../../../utils/helpers/date'
import { censorEmail } from '../../../../utils/helpers/methods'
// items
import { SubScreenContainer } from '../../../../components/common'
import { MsgAnimation } from '../../../../components/widgets'
import { Content, FirstVisit, MessageText } from './MessageStyle'

export default (props: any) => {
    const [loading, setLoading] = useState(true)
    const [message, setMessage] = useState<MessageReturn>()
    const [link, setLink] = useState({
        value: 'Copy link',
        copied: false
    })

    const [updateMsg] = useMutation(UPDATE_MESSAGE_VISITS_PK);
    useQuery(GET_MESSAGE_PK_CLIENT, {
        variables: {
            id: props.match.params.id
        },
        onCompleted: (data: any) => {
            const msg: MessageReturn = data.message_by_pk
            setMessage(msg)
            setLoading(false)
            updateMsg({
                variables: {
                    id: msg.id,
                    visits: msg.status_visits! + 1
                }
            })
        }
    });

    const getMsgStatus = () => {
        if (message?.responded) {
            return -1
        }
        return message?.status_visits
    }

    const CopyLink = () => (
        <CopyToClipboard
            text={window.location.href}
            onCopy={() => setLink({ value: 'Copied', copied: true })}
        >
            <button>{link.value}</button>
        </CopyToClipboard>
    )

    return (
        <SubScreenContainer
            defaultPrevUrl={'/'}
            pageTitle={'Message status'}
            title={'Message status'}
            loading={loading}
        >
            <Content copied={link.copied}>
                <MsgAnimation status={getMsgStatus()!} />
                {message?.status_visits! <= 1 ?
                    <FirstVisit>
                        <h3>{`Thank you, ${message?.name}!`}</h3>
                        <span>Your message was received. You can check the status of your message here</span>
                        <CopyLink />
                    </FirstVisit>
                    :
                    <>
                        <h3>{`${timeOfDay()}, ${message?.name}!`}</h3>
                        {!message?.responded ?
                            <>
                                <span>Your message was received and have not been responded to just yet.</span>
                                <span>You can check for updates here</span>
                                <CopyLink />
                            </>
                            :
                            <>
                                <span>I responded to your message via email.</span>
                                <span>My response was sent to:</span>
                                <br />
                                <span>{censorEmail(message.email)}</span>
                            </>
                        }

                    </>
                }
                {!message?.responded && (
                    <MessageText>
                        <p>"{message?.message}"</p>
                        <span>Sent: {timeAgo(message?.created_at!)}</span>
                    </MessageText>
                )}
            </Content>
        </SubScreenContainer>
    )
}