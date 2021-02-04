import React from 'react'
import { withRouter } from 'react-router';

export default withRouter(({ history, location, to, onClick, children, staticContext, newTab, ...rest }: any) => {

    const handleClick = () => {
        if (onClick) {
            // onClick is for excuting another function
            // or propagtion history push -- ex. onClick return
            onClick();
        }
        if (newTab) {
            const win = window.open(to, '_blank');
            win!.focus();
            return
        }
        history.push(to, location.pathname)
    }

    return (
        <button
            onClick={handleClick}
            name={to}
            aria-label={`Link to ${to}`}
            {...rest}
        >
            { children}
        </button>
    )
})