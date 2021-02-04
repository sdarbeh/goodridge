import React, { useState } from 'react'

import { eyeIcon, eyeHiddenIcon } from '../../../assets/icons/widgets'
// items
import { Input } from '../index'
import { Container } from './PasswordInputStyle'

interface props {
    displayName?: string;
    refs?: any;
    name: string;
}

export default ({ name, ...rest }: props) => {
    const [ visible, setVisible ] = useState(false)
    return (
        <Container visible={visible}>
            <Input
                type={visible ? 'text' : 'password'}
                element={'input'}
                name={name}
                {...rest}
            />
            <button 
                onClick={() => setVisible(prev => !prev)}
                type={'button'}
            >
                { visible ? eyeIcon : eyeHiddenIcon}
            </button>
        </Container>
    )
}