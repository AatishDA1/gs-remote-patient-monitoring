import React from "react"
import { allpatients } from "./ListPats"
import "../ManagingDrs/styles.css";

const Post = ({ post }) => {
    return(
        <article className="doctors-list">
            <span className="flex-container">
                <span>{post.title}</span>
                <span>{post.body}</span>
                <span>Post ID: {post.id}</span>
            </span>
        </article>
    )
}
export default Post