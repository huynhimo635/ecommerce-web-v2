import convertToSlug from "../../../utils/convertToSlug"

//img
const img101 = require("./img/products/101.png").default
const img102 = require("./img/products/102.png").default
const img103 = require("./img/products/103.png").default

const img201 = require("./img/products/201.png").default
const img202 = require("./img/products/202.png").default

const img301 = require("./img/products/301.png").default
const img302 = require("./img/products/302.png").default

const img401 = require("./img/products/401.png").default
const img402 = require("./img/products/402.png").default
const img403 = require("./img/products/403.png").default

const img501 = require("./img/products/501.png").default
const img502 = require("./img/products/502.png").default

const img601 = require("./img/products/601.png").default
const img602 = require("./img/products/602.png").default

const img701 = require("./img/products/701.png").default
const img702 = require("./img/products/702.png").default
const img703 = require("./img/products/703.png").default

const img801 = require("./img/products/801.png").default
const img802 = require("./img/products/802.png").default
const img803 = require("./img/products/803.png").default

const img901 = require("./img/products/901.png").default
const img902 = require("./img/products/902.png").default
const img903 = require("./img/products/903.png").default

const products = [
    {
        richDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero sequi itaque, molestias repellendus saepe quo id ut repudiandae architecto placeat excepturi quas voluptatem corrupti inventore sapiente unde sed eveniet?",
        image: "",
        images: [img101, img102, img103],
        brand: "trek",
        price: 125000000,
        rating: 5,
        numReviews: 5,
        isFeatured: true,
        _id: "1",
        name: "TREK PROCALIBER 9.8, ORG",
        description:
            "Procaliber 9.8 is the champion of the family. It’s a cross country hardtail made for riders who race to win, with a carbon IsoSpeed frame that soaks up trail chatter without sacrificing efficiency, a lightweight FOX fork that charges down technical descents and a smooth Shimano XT drive train.",
        category: {
            _id: "1",
            name: "mountain bike",
            icon: null,
            color: "red",
            __v: 0
        },
        countInStock: 200,
        dateCreated: "2021-10-27T01:39:17.446Z",
        __v: 0,
        id: "1"
    },

    {
        richDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero sequi itaque, molestias repellendus saepe quo id ut repudiandae architecto placeat excepturi quas voluptatem corrupti inventore sapiente unde sed eveniet?",
        image: "",
        images: [img201, img202],
        brand: "trek",
        price: 125000000,
        rating: 5,
        numReviews: 5,
        isFeatured: true,
        _id: "2",
        name: "Session 8 29 GX",
        description:
            "The Session 8 is a downhill mountain bike with a robust alloy frame and high-pivot suspension design that keeps you nimble, planted and blazing fast on even the most punishing runs.",
        category: {
            _id: "1",
            name: "mountain bike",
            icon: null,
            color: "red",
            __v: 0
        },
        countInStock: 200,
        dateCreated: "2021-10-27T01:39:17.446Z",
        __v: 0,
        id: "2"
    },

    {
        richDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero sequi itaque, molestias repellendus saepe quo id ut repudiandae architecto placeat excepturi quas voluptatem corrupti inventore sapiente unde sed eveniet?",
        image: "",
        images: [img301, img302],
        brand: "jett cicles",
        price: 7900000,
        rating: 5,
        numReviews: 5,
        isFeatured: true,
        _id: "3",
        name: "Quantum",
        description:
            "The Session 8 is a downhill mountain bike with a robust alloy frame and high-pivot suspension design that keeps you nimble, planted and blazing fast on even the most punishing runs.",
        category: {
            _id: "1",
            name: "mountain bike",
            icon: null,
            color: "red",
            __v: 0
        },
        countInStock: 200,
        dateCreated: "2021-10-27T01:39:17.446Z",
        __v: 0,
        id: "3"
    },

    {
        richDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero sequi itaque, molestias repellendus saepe quo id ut repudiandae architecto placeat excepturi quas voluptatem corrupti inventore sapiente unde sed eveniet?",
        image: "",
        images: [img401, img402, img403],
        brand: "jett cicles",
        price: 125000000,
        rating: 5,
        numReviews: 5,
        isFeatured: true,
        _id: "4",
        name: "Product 04",
        description:
            "Procaliber 9.8 is the champion of the family. It’s a cross country hardtail made for riders who race to win, with a carbon IsoSpeed frame that soaks up trail chatter without sacrificing efficiency, a lightweight FOX fork that charges down technical descents and a smooth Shimano XT drive train.",
        category: {
            _id: "2",
            name: "city bike",
            icon: null,
            color: "red",
            __v: 0
        },
        countInStock: 200,
        dateCreated: "2021-10-27T01:39:17.446Z",
        __v: 0,
        id: "4"
    },
    {
        richDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero sequi itaque, molestias repellendus saepe quo id ut repudiandae architecto placeat excepturi quas voluptatem corrupti inventore sapiente unde sed eveniet?",
        image: "",
        images: [img501, img502],
        brand: "electra",
        price: 125000000,
        rating: 5,
        numReviews: 5,
        isFeatured: true,
        _id: "5",
        name: "Product 05",
        description:
            "The Session 8 is a downhill mountain bike with a robust alloy frame and high-pivot suspension design that keeps you nimble, planted and blazing fast on even the most punishing runs.",
        category: {
            _id: "2",
            name: "city bike",
            icon: null,
            color: "red",
            __v: 0
        },
        countInStock: 200,
        dateCreated: "2021-10-27T01:39:17.446Z",
        __v: 0,
        id: "5"
    },
    {
        richDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero sequi itaque, molestias repellendus saepe quo id ut repudiandae architecto placeat excepturi quas voluptatem corrupti inventore sapiente unde sed eveniet?",
        image: "",
        images: [img601, img602],
        brand: "electra",
        price: 7900000,
        rating: 5,
        numReviews: 5,
        isFeatured: true,
        _id: "6",
        name: "Product 06",
        description:
            "The Session 8 is a downhill mountain bike with a robust alloy frame and high-pivot suspension design that keeps you nimble, planted and blazing fast on even the most punishing runs.",
        category: {
            _id: "2",
            name: "city bike",
            icon: null,
            color: "red",
            __v: 0
        },
        countInStock: 200,
        dateCreated: "2021-10-27T01:39:17.446Z",
        __v: 0,
        id: "6"
    },
    {
        richDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero sequi itaque, molestias repellendus saepe quo id ut repudiandae architecto placeat excepturi quas voluptatem corrupti inventore sapiente unde sed eveniet?",
        image: "",
        images: [img701, img702, img703],
        brand: "jett cicles",
        price: 125000000,
        rating: 5,
        numReviews: 5,
        isFeatured: true,
        _id: "7",
        name: "Product 07",
        description:
            "Procaliber 9.8 is the champion of the family. It’s a cross country hardtail made for riders who race to win, with a carbon IsoSpeed frame that soaks up trail chatter without sacrificing efficiency, a lightweight FOX fork that charges down technical descents and a smooth Shimano XT drive train.",
        category: {
            _id: "3",
            name: "road bike",
            icon: null,
            color: "red",
            __v: 0
        },
        countInStock: 200,
        dateCreated: "2021-10-27T01:39:17.446Z",
        __v: 0,
        id: "7"
    },
    {
        richDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero sequi itaque, molestias repellendus saepe quo id ut repudiandae architecto placeat excepturi quas voluptatem corrupti inventore sapiente unde sed eveniet?",
        image: "",
        images: [img801, img802, img803],
        brand: "trek",
        price: 125000000,
        rating: 5,
        numReviews: 5,
        isFeatured: true,
        _id: "8",
        name: "Product 08",
        description:
            "The Session 8 is a downhill mountain bike with a robust alloy frame and high-pivot suspension design that keeps you nimble, planted and blazing fast on even the most punishing runs.",
        category: {
            _id: "3",
            name: "road bike",
            icon: null,
            color: "red",
            __v: 0
        },
        countInStock: 200,
        dateCreated: "2021-10-27T01:39:17.446Z",
        __v: 0,
        id: "8"
    },
    {
        richDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero sequi itaque, molestias repellendus saepe quo id ut repudiandae architecto placeat excepturi quas voluptatem corrupti inventore sapiente unde sed eveniet?",
        image: "",
        images: [img901, img902, img903],
        brand: "electra",
        price: 7900000,
        rating: 5,
        numReviews: 5,
        isFeatured: true,
        _id: "9",
        name: "Product 09",
        description:
            "The Session 8 is a downhill mountain bike with a robust alloy frame and high-pivot suspension design that keeps you nimble, planted and blazing fast on even the most punishing runs.",
        category: {
            _id: "3",
            name: "road bike",
            icon: null,
            color: "red",
            __v: 0
        },
        countInStock: 200,
        dateCreated: "2021-10-27T01:39:17.446Z",
        __v: 0,
        id: "9"
    }
]

const getAllProducts = () => products

const getProductById = id => products.find(e => Number(e.id) === Number(id))
const getProductBySlug = slug =>
    products.find(e => convertToSlug(e.name) === slug)

const getCartItemsInfo = cartItems => {
    let res = []
    if (cartItems.length > 0) {
        cartItems.forEach(e => {
            let product = getProductById(e.id)
            res.push({
                ...e,
                product: product
            })
        })
    }

    return res
}

const getProducts = count => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}

const productData = {
    getAllProducts,
    getProductById,
    getCartItemsInfo,
    getProducts,
    getProductBySlug
}

export default productData
