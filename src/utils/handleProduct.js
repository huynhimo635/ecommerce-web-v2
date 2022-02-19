import convertToSlug from "./convertToSlug"

const getProductById = (id, data) => data.find(e => e._id === id)

const getProductBySlug = (slug, data) =>
    data.find(e => convertToSlug(e.name) === slug)

const getCartItemsInfo = (cartItems, data) => {
    let res = []
    if (cartItems.length > 0) {
        cartItems.forEach(e => {
            let product = getProductById(e.id, data)
            res.push({
                ...e,
                product: product
            })
        })
    }

    return res
}

const getProducts = (count, data) => {
    const max = data.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return data.slice(start, start + count)
}

const handleProductData = {
    getProductById,
    getCartItemsInfo,
    getProducts,
    getProductBySlug
}

export default handleProductData
