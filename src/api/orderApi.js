import axiosClient from "./axiosClient"

const orderApi = {
    add: data => {
        const subUrl = `/orders`
        return axiosClient.post(subUrl, data)
    }
}

export default orderApi
