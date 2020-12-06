import './product/product.component';
import { products } from './products-list.data';

const elementName = 'catalog-products';

customElements.define(elementName, class extends HTMLElement {

    constructor() {
        super();
    }

    public async connectedCallback() {   
        this.innerHTML = `
            <div class="flex flex-wrap justify-around">
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