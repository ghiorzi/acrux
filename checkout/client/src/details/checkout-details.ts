import { Product } from "../shared/models/checkout-product.model";
import { getProducts } from "../shared/services/checkout-product.service";


const elementName = 'checkout-details';

customElements.define(elementName, class extends HTMLElement {

    private _products: Product[];

    constructor() {
        super();

        this._products = getProducts();
    }

    public async connectedCallback(): Promise<void> {
        const style = require('!raw-loader!./checkout-details.style.css');
         
        this.innerHTML = `
            <style>${style.default}</style>
            <div class="catalog-products">
            ${this._products.map(product => `
                <p>${product.name}</p>
            `
            ).join(' ')}
        </div>
        `;

        this.setListeners();
    }

    public async disconnectedCallback(): Promise<void> {

    }

    private setListeners(): void {
    }
});

export { elementName };