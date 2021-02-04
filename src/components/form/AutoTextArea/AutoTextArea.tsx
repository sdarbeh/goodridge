import React, { useLayoutEffect, useRef } from "react";
// https://linguinecode.com/post/how-to-use-react-useref-with-typescript

export default (props: any) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useLayoutEffect(() => {
        if (null !== textareaRef.current) {
            textareaRef.current.style.height = "0px";
            const scrollHeight = textareaRef.current.scrollHeight;
            textareaRef.current.style.height = scrollHeight + "px";
        }
    }, [props.value]);

    return (
        <textarea
            ref={textareaRef}
            {...props}
        />
    )
}
