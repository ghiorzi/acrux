const elementName = 'checkout-basket-amount';

export class CheckoutBasketAmount extends HTMLElement {

    private _style: any;

    constructor() {
        super();

        this._style = require('!raw-loader!./checkout-basket-amount.style.css');
    }

    public async connectedCallback(): Promise<void> {
        this.render();
    }

    public render(amount: number = 0): void {
        this.innerHTML = `
            <style>${this._style.default}</style>
            <span class="checkout-basket-amount">${amount}</span>
        `;
    }
}

customElements.define(elementName, CheckoutBasketAmount);

export { elementName };