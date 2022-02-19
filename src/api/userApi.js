import axiosClient from "./axiosClient"

const userApi = {
    login: (email, password) => {
        const data = {
            email,
            password
        }
        const subUrl = "/users/login"
        return axiosClient.post(subUrl, data)
    },
    getMe: id => {
        const subUrl = `/users/${id}`
        return axiosClient.get(subUrl, id)
    },
    getAll: () => {
        const subUrl = "/users"
        return axiosClient.get(subUrl)
    },
    register: data => {
        const subUrl = "/users/register"
        return axiosClient.post(subUrl, data)
    }
}

export default userApi
