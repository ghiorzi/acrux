import { Product } from "../models/checkout-product.model";

const products: Product[] = [];

export function addProduct(product: Product): void {
    products.push(product);
}

export function updateProduct(product: Product): void {
    const existingProduct: Product =
        products.find((p: Product) => p.id === product.id);

    existingProduct.buy();
}

export function isExistingProduct(product: Product): boolean {
    const existingProduct: Product =
        products.find((p: Product) => p.id === product.id);

    return !!existingProduct;
}

export function getProducts(): Product[] {
    return products;
}
