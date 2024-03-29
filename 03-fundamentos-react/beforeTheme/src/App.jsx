import React, { useState } from "react";
import Header from "./components/Header/Header.jsx";
import { posts } from "./data/index.js";
import Post from "./components/Post/Post.jsx";
import ThemeProvider from "./context/ThemeContext/ThemeContext.jsx";
import { Title } from "./styles.js";

const App = () => {
    const [postsToUse, setPostsToUse] = useState(posts)

    const handleRefresh = () => {
        const postNumber = postsToUse.length + 1
        const newPost = {
            id: Math.random(),
            title: `Título número ${postNumber}`,
            subtitle: `Subtítulo número ${postNumber}`,
            likes: postNumber * 100,
            isRead: false,
            isRemove: false,
        }

        setPostsToUse(currentPosts => [...currentPosts, newPost])
        // setTimeout(() => {
        //     setPostsToUse((currentPosts) => {
        //         return [...currentPosts,
        //         {
        //             title: `Título número ${currentPosts.length + 1}`,
        //             subtitle: `Subtítulo número ${currentPosts.length + 1}`,
        //             likes: (currentPosts.length + 1) * 100
        //         }]
        //     })
        // }, 2 * 1000)

        console.log(postsToUse)
        console.log("Refreshing")
    }

    const handleRemove = (postId) => {
        setPostsToUse(currentPost => currentPost.map(
            post => (
                post.id === postId
                    ? { ...post, isRemove: true }
                    : post
            )
        ))
    }

    const handleRead = (postId) => {
        setPostsToUse(currentPost => currentPost.map(
            post => (
                post.id === postId
                    ? { ...post, isRead: true }
                    : post
            )
        ))
    }

    return (
        <ThemeProvider>
            <Header>
                <Title as="h3">Posts da semana</Title>
                <button onClick={handleRefresh}>Render again</button>
            </Header>

            <hr />

            {postsToUse.map((post, index) => (
                <Post
                    key={index}
                    post={post}
                    onRead={handleRead}
                    onRemove={handleRemove}
                />
            ))}
        </ ThemeProvider>
    )
}

export default App