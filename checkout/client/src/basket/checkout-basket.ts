import { Product } from '../shared/models/checkout-product.model';
import { createProduct } from '../shared/services/checkout-product.factory';
import { addProduct } from '../shared/services/checkout-product.service';
import './amount/checkout-basket-amount';
import { CheckoutBasketAmount } from './amount/checkout-basket-amount';

const elementName = 'checkout-basket';

customElements.define(elementName, class extends HTMLElement {

    private _style: any;
    private _itemsAmount: number = 0;

    constructor() {
        super();

        this._style = require('!raw-loader!./checkout-basket.style.css');
    }

    public async connectedCallback(): Promise<void> {
        this.render();

        this.setListeners();
    }

    public async disconnectedCallback(): Promise<void> {
        window.removeEventListener('addToBasket', this.handleAddToBasket);
    }

    private render(): void {
        this.innerHTML = `
            <style>${this._style.default}</style>
            <div class="checkout">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg>
                <checkout-basket-amount></checkout-basket-amount>
            </div>
        `;
    }

    private setListeners(): void {
        document.querySelector('.checkout').addEventListener('click', (): void => {
            window.history.pushState({}, 'checkout', 'checkout');
            window.dispatchEvent(new PopStateEvent('popstate'));
        });

        window.addEventListener(
            'addToBasket',
            (event: CustomEvent) => this.handleAddToBasket(event),
        );
    }

    private handleAddToBasket(event: CustomEvent): void {
        this.incrementAmount();
        addProduct(
            createProduct(
                event.detail.product.id, 
                event.detail.product.name, 
                event.detail.product.price, 
                event.detail.product.thumbnail
            ),
        );
    }

    private incrementAmount(): void {
        (document.querySelector('checkout-basket-amount') as CheckoutBasketAmount).render(++this._itemsAmount);
    }
});

export { elementName };