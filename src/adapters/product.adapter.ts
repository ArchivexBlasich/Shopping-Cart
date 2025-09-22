import type { EndPointProduct } from "../models/EndPointProduct.model"
import type { Product } from "../models/Product.model"

export const createUserAdapter = (product: EndPointProduct) => {
    const formattedProduct: Product = {
        id: product.id,
        title: product.title,
        price: product.price,
        category: product.category,
        description: product.description,
        image: product.image,
        rating: product.rating.rate,
        isCart: false,
    } 

    return formattedProduct;
} 