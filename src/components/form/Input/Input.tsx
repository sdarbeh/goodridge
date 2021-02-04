import React from 'react'
import { capString } from '../../../utils/helpers/methods'
// items
import { Container } from './InputStyle'

interface props {
    displayName?: string;
    type?: string;
    refs?: any;
    disabled?: boolean;
    element: 'input' | 'textarea';
    name: string;
}

export default ({ displayName, element, name, type, refs, disabled, ...rest }: props) => {
    return (
        <Container>
            <div>{displayName ? displayName : capString(name)}</div>
            { element === "textarea" && (
                <textarea
                    name={name}
                    ref={refs}
                    readOnly={disabled}
                    {...rest}
                />
            )}
            { element === "input" && (
                <input
                    type={type ? type : "text"}
                    name={name}
                    ref={refs}
                    autoComplete={"no"}
                    readOnly={disabled}
                    {...rest}
                />
            )}
        </Container>
    )
}