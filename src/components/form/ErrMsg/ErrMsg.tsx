import React from 'react'

import { errorIcon } from '../../../assets/icons/widgets'
import { CenterDiv } from '../../../components/widgets'
// items
import { Msg } from './ErrMsgStyle'

interface prop {
    msg: string;
}

export default ({ msg, ...rest }: prop) => (
    <Msg {...rest}>
        <CenterDiv>{errorIcon}</CenterDiv>
        <span>{msg}</span>  
    </Msg>
)