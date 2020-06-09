import React from "react";
import {connect} from "react-redux";
import {follow, getUsers, setCurrentPage, toggleFollowingProgress, unfollow,} from "../../redux/users-reducer";
import Preloader from "../Common/Preloader/Preloader";
import Users from "./Users";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";


class UserContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber,this.props.pageSize);
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                totaUsersCount={this.props.totaUsersCount}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totaUsersCount: state.usersPage.totaUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    }
};
// let mapDispatchToProps=(dispatch)=>{
//     return{
//         follow: (userId)=>{
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId)=>{
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users)=>{
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage:(pageNumber)=>{
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount:(totalCount)=>{
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching:(isFetching)=>{
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//
//
//
//     }
// };

// let withRedirect = withAuthRedirect(UserContainer);
//
// export default connect(mapStateToProps,
//     {
//         follow,
//         unfollow,
//         setCurrentPage,
//         toggleFollowingProgress,
//         getUsers
//     }
// )(withRedirect);
export default compose(
    connect(mapStateToProps,
        {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers}))
    // withAuthRedirect
(UserContainer)