import React from 'react'
import PropTypes from 'prop-types'

export function Post(props) {
    console.log(props)
    return (
        <React.Fragment>
            <article>
                <strong>{props.post.title}</strong> <br />
                <small>{props.post.subtitle}</small>
            </article>
            <br />
            Value: {props.likes}
        </React.Fragment>
    )
}

Post.propTypes = {
    likes: PropTypes.number.isRequired,
    //For objects use PropTypes.shape
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired
    }).isRequired,
}