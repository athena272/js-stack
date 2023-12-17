import React from "react";
import PropTypes from "prop-types"
import PostHeader from "./PostHeader.jsx"
import Button from "../Button/Button.jsx";

const Post = ({ post, onRemove, theme }) => (
    <>
        <article>
            <PostHeader post={post} theme={theme} />
        </article>
        <br />

        <Button onClick={() => onRemove(post.id)} theme={theme}>
            Remove
        </Button>

        <button>Read a post</button>
        <br />
        <hr />
    </>
)

Post.propTypes = {
    theme: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired,
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        isRead: PropTypes.bool.isRequired
    }
    ).isRequired
}

export default Post