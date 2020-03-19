import React from 'react';
import b from './MyPosts.module.css'
import Post from "./Post/MyPost";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    return (
        <div className={b.postsBlock}>
            <h3>My Posts </h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button> Add post</button>
                </div>
            </div>
            <div className={b.posts}>
                {postsElements}
            </div>
        </div>
    )
};
export default MyPosts;