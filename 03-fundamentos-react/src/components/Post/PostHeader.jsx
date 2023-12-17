import React from "react"
import PropTypes from "prop-types"

const PostHeader = ({ post, theme }) => (
    <>
        <strong>
            {post.isRead ? <s>{post.title}</s> : post.title}
        </strong> <br />
        <small>{post.subtitle}</small> <br />
        Likes: {post.likes}
    </>
)

PostHeader.propTypes = {
    theme: PropTypes.string.isRequired,
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        isRead: PropTypes.bool.isRequired
    }
    ).isRequired
}

export default PostHeader