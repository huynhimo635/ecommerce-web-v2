import axiosClient from "./axiosClient"

const productApi = {
    getAll: () => {
        const subUrl = "/products"
        return axiosClient.get(subUrl)
    },
    get: id => {
        const subUrl = `/products/${id}`
        return axiosClient.get(subUrl)
    }
}

export default productApi
