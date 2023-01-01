import React from 'react'
import Post from './Post'
import RenderPatient from './RenderPatient'

const ListPage = ({ searchResult }) => {
    const results = searchResult.map(post => <Post key={post.id} post={post}/>)
    const content=results?.length ? results : <article><p>No Matching Posts</p></article>
    
    return (
        <main>{content}</main>
    )
}

export default ListPage
