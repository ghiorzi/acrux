import { Product } from "../models/checkout-product.model";


export function createProduct(id: string, name: string, price: number, thumbnail: string): Product {
    return new Product(id, name, price, thumbnail);
}