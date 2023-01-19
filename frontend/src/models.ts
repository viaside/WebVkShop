// Product interface
export interface IProduct {
    id: number
    title: string
    price: number
    description: string
    category: string
    imageMain: string
    imageSecond: string
    imageThird: string
}

//Product info for basket
export interface IProductInfo {
    id: number
    price: number
    count: number
}

// Basket product interface
export interface IBasketProduct {
    userId: number
    productInfo: IProductInfo[]
}