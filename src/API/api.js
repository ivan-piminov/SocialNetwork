import * as axios from "axios";
import User from "../components/Users/User";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": "e6c1df8c-20e4-45d3-b9aa-b0d816f72c5c"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
            {withCredentials: true})
            .then(response => response.data)
    },
    follow(userId) {
        return instance.post(`/follow/${userId}`)

    },
    unfollow(userId) {
        return instance.delete(`/follow/${userId}`)

    },
    getProfile(userId) {
        return profileAPI.getProfile(userId)
    }
};
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`/profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`/profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`/profile/status`, {status: status})
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile);
        return instance.put(`/profile/photo`, formData, {
            "Content-Type": "multipart*form-data"
        })
    },
    saveProfile(profile) {
        return instance.put(`/profile`, profile)
    }
};
export const authAPI = {
    me() {
        return instance.get(`/auth/me`)
    },
    login(email, password, rememberMe = false, captcha=null) {
        return instance.post(`/auth/login`, {email, password, rememberMe,captcha})
    },
    logout() {
        return instance.delete(`/auth/login`)
    }
};
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
};
// export const dialogsAPI = {
//     getDialogs() {
//         return instance.get(`dialogs`)
//             .then(res=> res.data)
//     },
//     startDialog(UserId) {
//         return instance.get(`dialogs/${UserId}`)
//             .then(res=> res.data)
//     },
//     sendMessages(UserId, messageText='test message') {
//         return instance.post(`dialogs/2/messages`,{
//             body:messageText
//         })
//             .then(res=> res.data)
//     }
// };



