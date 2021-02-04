import React from 'react'

import { warningIcon } from '../../../assets/icons/widgets'
import { CenterDiv } from '../../../components/widgets'
// items
import { Container, Error, MaxAttempts } from './SubmitErrorStyle'

interface prop {
    msg?: string;
    attempts: number;
    maxAttempts: number;
}

export default ({ msg, attempts, maxAttempts, ...rest }: prop) => {
    const remaining = maxAttempts - attempts
    return (
        <Container {...rest}>
            { remaining !== 0 ?
                <Error>
                    <CenterDiv>{warningIcon}</CenterDiv>
                    <div>
                        <span>{msg ? msg : 'Oops, an error occured. Please try again.'}</span><br/>
                        <span>{`${remaining} ${remaining === 1 ? 'attempt' : 'attempts'} remaining`}</span>
                    </div>
                </Error>
                :
                <MaxAttempts>
                    <h2>Submission attempts exceeded.</h2>
                </MaxAttempts>
            }
        </Container>
    )
}