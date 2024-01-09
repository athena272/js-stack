import React from "react"
import PropTypes from "prop-types"
import { SubTitle, Rate } from './styles.js'

const PostHeader = ({ post }) => (
    <>
        <strong>
            {post.isRead ? <s>{post.title}</s> : post.title}
        </strong> <br />
        <SubTitle>{post.subtitle}</SubTitle> <br />
        <Rate>Likes: {post.likes}</Rate>
    </>
)

PostHeader.propTypes = {
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