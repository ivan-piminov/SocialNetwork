import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";


const User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={styles.usersWrap}>
            <div>
                <NavLink to={"./profile/" + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.photo}/>
                </NavLink>
            </div>
            <div>
                {user.followed
                    ? <button className={styles.fuButton} disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  unfollow(user.id)
                              }
                              }> Unfolllow</button>
                    : <button className={styles.fuButton} disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  follow(user.id)
                              }
                              }> Folllow</button>}
            </div>

            <div><b>Name:</b>{user.name}</div>
            <div><b>Status:</b>{user.status}</div>

            {/*    <span>*/}
            {/*<div>{'user.location.country'}</div>*/}
            {/*<div>{'user.location.city'}</div>*/}
            {/*    </span>*/}
        </div>)
};

export default User;