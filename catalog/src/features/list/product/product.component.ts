import { createProdutc } from "./product.factory";

const elementName = 'catalog-product';

customElements.define(elementName, class extends HTMLElement {

    constructor() {
        super();

        this._attributes =
            new Map<string, string>([
                ['id', ''],
                ['name', ''],
                ['price', ''],
                ['thumbnail', ''],
            ]);
    }

    private _attributes: Map<string, string>;
    private _basketButton: Element;

    public static get observedAttributes(): string[] {
        return ['id', 'name', 'price', 'thumbnail'];
    }

    public attributeChangedCallback(name, oldValue, newValue) {
        this._attributes.set(name, newValue);
    }

    public connectedCallback(): void {
        this.innerHTML = this.render();

        this._basketButton = 
            document.getElementById(`${ 'add-to-basket-' + this._attributes.get('id') }`);
        
        this._basketButton.addEventListener('click', () => this.addToBasket());
    }

    public async disconnectedCallback(): Promise<void> {
        this._basketButton.removeEventListener('click', this.addToBasket);
    }

    public render(): string {
        const style = require('!raw-loader!./product.style.css');

        return `
            <style>${style.default}</style>
            <div class="catalog-product">
                <figure class="catalog-product__thumbnail">
                    <img src="${this._attributes.get('thumbnail')}">
                    <div class="catalog-product__overlay"></div>
                </figure>
                <div class="catalog-product__price">
                    <span>$ ${this._attributes.get('price')}</span>
                </div>
                <div class="flex justify-center">
                    <button class="catalog-product__call-to-action" id="${ 'add-to-basket-' + this._attributes.get('id') }">[ ADD TO BASKET ]</button>
                </div>
            </div>
        `;
    }

    private addToBasket(): void {
        window.dispatchEvent(new CustomEvent('addToBasket', {
            detail: { 
                product: createProdutc(
                    this._attributes.get('id'),
                    this._attributes.get('name'),
                    parseInt(this._attributes.get('price')),
                    this._attributes.get('thumbnail')
                )
            }
        }));
    }
});

export { elementName };