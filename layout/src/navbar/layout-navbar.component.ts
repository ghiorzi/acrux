import './logo/layout-logo.component';

const elementName = 'layout-navbar';

customElements.define(elementName, class extends HTMLElement {

    constructor() {
        super();
    }

    public async connectedCallback(): Promise<void> {
      this.innerHTML = this.render();
      this.setListeners();

      const basket = await import('checkout/basket');
      const container: Element = document.querySelector('.js-checkout-menu');
      const basketElement = document.createElement(basket.elementName);
  
      container.appendChild(basketElement);
    }

    private render(): string {
      const style = require('!raw-loader!./layout-navbar.style.css');

      return this.innerHTML = `
          <style>${style.default}</style>
          <nav class="navbar flex flex-wrap items-center justify-between">
          <div class="navbar__content flex flex-wrap items-center justify-between">
        
            <div class="flex items-center">
                <layout-logo class="js-nagivate-to-home"></layout-logo>
            </div>
        
            <div class="navbar__content__menu flex items-center">
              <ul class="flex flex-auto flex-grow">
                <li class="js-checkout-menu"></li>
              </ul>
            </div>
          </div>
        </nav>
      `;
    }

    private setListeners(): void {
      document
        .querySelector('.js-nagivate-to-home')
        .addEventListener('click', (): void => {
          window.history.pushState({}, '/', '/');
          window.dispatchEvent(new PopStateEvent('popstate'));
        })
    }
});

export default elementName;