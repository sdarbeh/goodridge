import React from 'react'

// items
import { LoadingSpinner } from '../../widgets'
import { FormButton } from './FormButtonStyle'

interface props {
    text: string;
    loading?: boolean;
    disabled?: boolean;
}

export default ({ text, loading, disabled, ...rest }: props) => (
    <FormButton
        disabled={loading || disabled}
        {...rest}
    >
        { loading ?
            <LoadingSpinner size={25}/>
            :
            <span>{text}</span>
        }
    </FormButton>
)