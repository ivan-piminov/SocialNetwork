import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": "ffd426a2-955f-4438-aed5-116886d2fff8"
    }

});

export const usersAPI={
    getUsers (currentPage = 1, pageSize = 10)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
            {withCredentials: true})
            .then(response => response.data)
    },
    follow (userId){
        return  instance.post(`/follow/${userId}`)

    },
    unfollow (userId){
        return instance.delete(`/follow/${userId}`)

    },
    getProfile(userId){
        return   instance.get(`/profile/${userId}`)
    }
};
export const authAPI={
    me () {
        return instance.get(`/auth/me`)
    }
};



