import React from 'react';
import b from './MyPost.module.css'

const Post = (props) => {
    return (
        <div className={b.item}>
            {props.message}
            <div>
                <span> Like </span> {props.likesCount}
            </div>
        </div>
    )
}
export default Post;

