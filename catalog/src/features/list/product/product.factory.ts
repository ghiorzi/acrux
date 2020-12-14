import { Product } from "./product.model";

export function createProdutc(id: string, name: string, price: number, thumbnail: string): Product {
    return new Product(id, name, price, thumbnail);
}