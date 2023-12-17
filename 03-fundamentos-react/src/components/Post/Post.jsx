import React from "react";
import PropTypes from "prop-types"
import PostHeader from "./PostHeader.jsx"
import Button from "../Button/Button.jsx";

const Post = ({ post, onRemove }) => (
    <>
        <article>
            <PostHeader post={post} />
        </article>
        <br />

        <Button onClick={() => onRemove(post.id)}>
            Remove
        </Button>

        <button>Read a post</button>
        <br />
        <hr />
    </>
)

Post.propTypes = {
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