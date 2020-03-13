import React from 'react';
import b from './Profile.module.css';
import MyPosts from "./Posts/MyPosts";
import ProfileInfo from "./Posts/ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>

    )
}
export default Profile;