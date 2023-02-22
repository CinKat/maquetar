import React from 'react';

interface Props {
    type?: string,
    children: React.ReactNode,
}

const classes = {
    title:     'title__principal',
    opinion:   'title__principal title__principal--opinion'
}

export const Title: React.FC<Props> = (props) => {
    return (
        <>
            <h1 className={props.type === 'opinion' ? classes.opinion : classes.title}>{props.children}</h1>
        </>
    )
}