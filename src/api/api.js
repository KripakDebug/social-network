import axios from "axios";

const instanse = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    'API-KEY': 'c313e4a3-5876-4cc1-946e-39d3bc364835'
});
export const UsersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return (instanse.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data));
        },
    Follow(userId) {
        return (instanse.post(`follow/${userId}`, {}).then(response => response.data));
    },
    Unfollow(userId) {
        return (instanse.delete(`follow/${userId}`).then(response => response.data));
    },
    GetFriends() {
        return (instanse.get(`users?friend=true`).then(response => response.data));
     },
   
}


export const ProfileAPI = {
     GetProfileUser(userId) {
        return ( instanse.get(`profile/${userId}`).then(response => response.data));
    },
    GetStatus(userId) {
        return  (instanse.get(`profile/status/${userId}`));
    },
    UpdateStatus(status) {
        return (instanse.put(`profile/status`, {status: status}));
    },
    savePhoto(photo) {
        let formData = new FormData();
        formData.append('image', photo)
        return (
        instanse.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }));
    },
    saveProfile(profile) {
        return (
        instanse.put(`profile`, profile));
    }
}


export const AuthAPI = {
    GetPMyLogin() {
        return (instanse.get('auth/me').then(response => response.data));
    },
    LoginMe(email, password, rememberMe = false) { 
        return   (
            instanse.post('auth/login', {email, password, rememberMe})
            );
    },
    LogoutMe() {
        return (instanse.delete('auth/login'));
    },
}


