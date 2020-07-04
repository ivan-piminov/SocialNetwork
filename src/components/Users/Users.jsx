import React from "react";
import Paginator from "../Common/Pagiinator/Paginator";
import User from "./User";


const Users = ({currentPage, onPageChanged, totaUsersCount, pageSize, users, ...props}) => {
    return <div>
        <Paginator currentPage={currentPage}
                   onPageChanged={onPageChanged}
                   totaUsersCount={totaUsersCount}
                   pageSize={pageSize}/>

        <div>{users.map(u => <User user={u}
                                   followingInProgress={props.followingInProgress}
                                   unfollow={props.unfollow}
                                   follow={props.follow}
                                   key={u.id}/>)
        }
        </div>
    </div>
};
export default Users;