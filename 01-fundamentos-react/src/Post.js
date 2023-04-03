import React from 'react'

export function Post(props) {
    console.log(props)
    return (
        <React.Fragment>
            <article>
                <strong>{props.post.title}</strong> <br />
                <small>{props.post.subtitle}</small>
            </article>
            <br />
        </React.Fragment>
    )
}