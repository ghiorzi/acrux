// import * as rxjs from 'rxjs';
import './list/products-list.component';

const elementName = 'catalog-page';

customElements.define(elementName, class extends HTMLElement {

    constructor() {
        super();
    }

    async connectedCallback() {
        const style = require('!raw-loader!./catalog-page.style.css');

        this.innerHTML = `
            <style>${style.default}</style>
            <div class="catalog">
                <catalog-products class="flex"></catalog-products>
            </div>
        `;
    }
});

export { elementName };