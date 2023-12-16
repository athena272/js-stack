import React from "react";
import PropTypes from "prop-types"

const Post = ({ post, likes }) => (
    <>
        <article>
            <strong>{post.title}</strong> <br />
            <small>{post.subtitle}</small> <br />

            Likes: {likes}
        </article>

        <br />
    </>
)

Post.propTypes = {
    likes: PropTypes.number.isRequired,
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
    }
    ).isRequired
}

export default Post