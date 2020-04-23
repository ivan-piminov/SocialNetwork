import React, {createRef} from 'react';
import b from './MyPosts.module.css'
import Post from "./Post/MyPost";



const  MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    let NewPostElement = createRef();
    let onAddPost = () => {
        props.addPost()
    };
    let onPostChange= ()=>{
        let text = NewPostElement.current.value;
        props.updateNeWPostText(text);

    };
    return (
        <div className={b.postsBlock}>
            <h3>My Posts </h3>
            <div>
                <div>
                    <textarea ref = {NewPostElement}
                   value={props.newPostText}
                    onChange={onPostChange}
                    />
                </div>
                <div>
                    <button onClick={onAddPost}> Add post</button>
                </div>
            </div>
            <div className={b.posts}>
                {postsElements}
            </div>
        </div>
    )
};
export default MyPosts;