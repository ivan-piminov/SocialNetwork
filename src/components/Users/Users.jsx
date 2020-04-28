import React from "react";
import styles from "./users.module.css"

let Users = (props) => {
    if (props.users.length===0) {
        props.setUsers([
            {
                id: 1,
                photoURL: 'https://cdnb.artstation.com/p/assets/images/images/008/009/333/large/charles-campello-gollum.jpg?1509904069',
                followed: false,
                fullName: 'Oleg',
                status: 'engineer',
                location: {country: 'Russia', city: 'Moscow'}
            },
            {
                id: 2,
                photoURL: 'https://cdnb.artstation.com/p/assets/images/images/008/009/333/large/charles-campello-gollum.jpg?1509904069',
                followed: true,
                fullName: 'Inav',
                status: 'engineer',
                location: {country: 'Russia', city: 'Yaroslavl'}
            },
            {
                id: 3,
                photoURL: 'https://cdnb.artstation.com/p/assets/images/images/008/009/333/large/charles-campello-gollum.jpg?1509904069',
                followed: false,
                fullName: 'Vovan',
                status: 'engineer',
                location: {country: 'Russia', city: 'Korolev'}
            }
        ]);
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
<span>
    <div>
        <img src={u.photoURL} className={styles.photo}/>
    </div>
    <div>
        {u.followed ? <button onClick={() => {
                props.unfollow(u.id)
            }}> Unfolllow</button>
            : <button onClick={() => {
                props.follow(u.id)
            }}> Folllow</button>}
    </div>
</span>
                <span>
    <span>
<div>{u.fullName}</div>
<div>{u.status}</div>
    </span>
    <span>
<div>{u.location.country}</div>
<div>{u.location.city}</div>
    </span>
</span>
            </div>)
        }
    </div>

};
export default Users;