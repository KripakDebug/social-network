import React from "react";
import c from './Post.module.css'

const Post = ({message, like}) => {
    return (
        <div className={c['post-wrapper']}>
            <div className={c.post}>{message}</div>
            <div>like <span>{like}</span></div>
        </div>
    )
}


export default Post;