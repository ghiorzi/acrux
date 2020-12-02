const elementName = 'checkout-details';

customElements.define(elementName, class extends HTMLElement {

    constructor() {
        super();
    }

    public async connectedCallback(): Promise<void> {
        const style = require('!raw-loader!./checkout-details.style.css');

        this.innerHTML = `
            <style>${style.default}</style>
            <p>checkout details...</p>
        `;

        this.setListeners();
    }

    public async disconnectedCallback(): Promise<void> {

    }

    private setListeners(): void {
    }
});

export { elementName };