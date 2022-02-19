import axiosClient from "./axiosClient"

const categoryApi = {
    getAll: () => {
        const subUrl = "/categories"
        return axiosClient.get(subUrl)
    },
    get: id => {
        const subUrl = `/categories/${id}`
        return axiosClient.get(subUrl)
    }
}

export default categoryApi
