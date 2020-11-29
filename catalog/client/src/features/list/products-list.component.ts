import './product/product.component';
import { products } from './products-list.data';

const elementName = 'catalog-products';

customElements.define(elementName, class extends HTMLElement {

    constructor() {
        super();
    }

    public async connectedCallback() {
        const style = require('!raw-loader!./products-list.style.css');
        
        this.innerHTML = `
            <style>${style.default}</style>
            <div class="catalog-products">
                ${products.map(product => `
                    <catalog-product
                        id="${ product.id }"
                        name="${ product.name }"
                        price="${ product.price }"
                        thumbnail="${ product.thumbnail }"
                    >
                    </catalog-product>
                `
                ).join(' ')}
            </div>
        `;
    }
});

export { elementName };