const elementName = 'layout-navbar';

customElements.define(elementName, class extends HTMLElement {

    constructor() {
        super();
    }

    public async connectedCallback(): Promise<void> {
      this.innerHTML = this.render();

      const basket = await import('checkout/basket');
      const container: Element = document.querySelector('.navbar__content__menu__options__option');
      const basketElement = document.createElement(basket.elementName);
  
      container.appendChild(basketElement);
    }

    private render(): string {
      const style = require('!raw-loader!./layout-navbar.style.css');

      return this.innerHTML = `
          <style>${style.default}</style>
          <nav class="navbar">
          <div class="navbar__content">
        
            <div class="navbar__content__header">
              <a href="#">
                <h4 class="navbar__content__header__logo">Acrux</h4>
              </a>
            </div>
        
            <div class="navbar__content__menu">
              <ul class="navbar__content__menu__options">
                <li class="navbar__content__menu__options__option"></li>
              </ul>
            </div>
          </div>
        </nav>
      `;
    }
});

export default elementName;