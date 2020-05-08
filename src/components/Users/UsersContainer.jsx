import React from "react";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unfollowAC
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import preloader from "../../assets/images/Preloader.gif"
import Preloader from "../Common/Preloader/Preloader";

class  UserContainer extends React.Component{

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.toggleIsFetching(false);
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged =(pageNumber)=>{
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.toggleIsFetching(false);
        })

    };

    render() {
        return <>
            {this.props.isFetching  ? <Preloader/>:null}
            <Users
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            onPageChanged={this.onPageChanged}
            currentPage ={this.props.currentPage}
            pageSize = {this.props.pageSize}
            totaUsersCount={this.props.totaUsersCount}/>
            </>
    }
}

let mapStateToProps =(state)=>{
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totaUsersCount: state.usersPage.totaUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching

    }
};
let mapDispatchToProps=(dispatch)=>{
    return{
        follow: (userId)=>{
            dispatch(followAC(userId))
        },
        unfollow: (userId)=>{
            dispatch(unfollowAC(userId))
        },
        setUsers: (users)=>{
            dispatch(setUsersAC(users))
        },
        setCurrentPage:(pageNumber)=>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount:(totalCount)=>{
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching:(isFetching)=>{
            dispatch(toggleIsFetchingAC(isFetching))
        }



    }
};

export default connect(mapStateToProps,mapDispatchToProps) (UserContainer);