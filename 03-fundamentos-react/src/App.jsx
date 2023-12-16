import React from "react";
import Header from "./components/Header.jsx";
import { posts } from "./data/index.js";
import Post from "./components/Post.jsx";

const App = () => (
    <>
        <Header>
            <h2>Posts da semana</h2>
        </Header>

        <hr />

        {posts.map((post, index) => (
            <Post key={index}
                likes={post.likes}
                post={{
                    title: post.title,
                    subtitle: post.subtitle
                }}
            />
        ))}
    </>
)

export default App