import { Product } from "../shared/models/checkout-product.model";
import { getProducts } from "../shared/services/checkout-product.service";


const elementName = 'checkout-details';

customElements.define(elementName, class extends HTMLElement {

    private _products: Product[];
    private _totalPrice: number;
    private _style;

    constructor() {
        super();

        this._products = getProducts();
        this._totalPrice = this.calculateTotalPrice();

        this._style = require('!raw-loader!./checkout-details.style.css').default;
    }

    public async connectedCallback(): Promise<void> {
        this.innerHTML = this.render();
    }

    private render(): string {
        if (this._products.length == 0) {
            return `
            <style>${this._style}</style>
            <div class="checkout-details-empty-basket flex justify-center items-center mt-20">
                <p>Your basket is empty :(<p>
            </div>
        `;
        }

        return `
        <style>${this._style}</style>
        <div class="checkout-details grid grid-cols-4 gap-4 mt-16">
            <div class="checkout-details__column flex justify-center items-center">Product</div>
            <div class="checkout-details__column flex justify-center items-center">Amount</div>
            <div class="checkout-details__column flex justify-center items-center">Price</div>
            <div class="checkout-details__column flex justify-center items-center">Total</div>

            ${this._products.map(product => `
                <div class="flex justify-center items-center">${product.name}</div>
                <div class="flex justify-center items-center">${product.amount}</div>
                <div class="flex justify-center items-center">${product.price}</div>
                <div class="flex justify-center items-center">${product.calculateTotalPrice()}</div>
            `
            ).join(' ')}

            <div></div>
            <div></div>
            <div></div>
            <div class="flex justify-center items-center">${this._totalPrice}</div>
        </div>
        `;
    }

    private calculateTotalPrice(): number {
        if (this._products.length == 0)
            return 0;

        return this._products
            .map((p: Product) => p.calculateTotalPrice())
            .reduce((previous, next) => previous + next);
    }
});

export { elementName };