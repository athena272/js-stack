import React from 'react'

import { Post } from './Post.js'
import { Header } from './Header.js'

const postOfWeek = 'Posts da semana'

// Render -> Renderizar
// Props
export function App() {
    return (
        <React.Fragment>
            <Header>
                <h2>{postOfWeek}</h2>
            </Header>

            <hr />

            <Post
                likes={220}
                post={{
                    title: 'Titulo Noticia 01',
                    subtitle: 'Subtitule Noticia 01'
                }}
            />
            <Post
                likes={530}
                post={{
                    title: 'Título Noticia 02',
                    subtitle: 'Sutítulo Noticia 02'
                }}
            />
            <Post
                likes={470}
                post={{
                    title: 'Título Noticia 03',
                    subtitle: 'Sutítulo Noticia 03'
                }}
            />
        </React.Fragment>
    )
} 