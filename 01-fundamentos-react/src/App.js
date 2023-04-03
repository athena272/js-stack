import React from 'react'
import { Post } from './Post.js'


const postOfWeek = 'Posts da semana'

// Render -> Renderizar
// Props
export function App() {
    return (
        <React.Fragment>
            <h1>JStack Blogs</h1>
            <h2>{postOfWeek}</h2>

            <hr />

            <Post
                post={{
                    title: 'Titulo Noticia 01',
                    subtitle: 'Subtitule Noticia 01'
                }}
            />
            <Post
                post={{
                    title: 'Título Noticia 02',
                    subtitle: 'Sutítulo Noticia 02'
                }}
            />
            <Post
                post={{
                    title: 'Título Noticia 03',
                    subtitle: 'Sutítulo Noticia 03'
                }}
            />
            <Post
                post={{
                    title: 'Título Noticia 04',
                    subtitle: 'Sutítulo Noticia 04'
                }}
            />
        </React.Fragment>
    )
} 