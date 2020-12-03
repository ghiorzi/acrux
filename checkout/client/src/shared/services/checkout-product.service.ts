import { Product } from "../models/checkout-product.model";

const products: Product[] = [];

export function addProduct(product: Product): void {
    const existingProduct: Product =
        products.find((p: Product) => p.id === product.id);

    if (existingProduct) {
        existingProduct.buy();

        return;
    }

    products.push(product);
}

export function getProducts(): Product[] {
    return products;
}
