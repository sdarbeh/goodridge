import React from 'react'
import { msgSentIcon, msgRecievedIcon, msgOpenedIcon } from '../../../assets/icons/widgets'
// items
import { Sent, Recieved, Opened } from './MsgAnimationStyle'

interface props {
  status: Number;
}

export default ({ status, ...rest }: props) => (
  <>
    { status === 1 && (
      <Sent>{msgSentIcon}</Sent>
    )}
    { status >= 2 && (
      <Recieved>{msgRecievedIcon}</Recieved>
    )}
    { status === -1 && (
      <Opened>{msgOpenedIcon}</Opened>
    )}
  </>
)