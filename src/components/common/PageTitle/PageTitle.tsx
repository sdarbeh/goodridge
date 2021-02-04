//https://github.com/nfl/react-helmet#readme
import React from 'react'
import { Helmet } from "react-helmet";

interface props {
    title: string;
    metaName?: string;
    metaContent?: string;
    children?: any;
}

export default ({ title, metaName, metaContent, children }: props) => {
    title = title.charAt(0).toUpperCase() + title.slice(1)
    return (
        <Helmet>
            <title>{title + ' | Goodridge Portfolio'}</title>
            <meta name={metaName} content={metaContent} />
            { children }
        </Helmet>
    )
}