import "./styles.css";

const container: Element = document.querySelector('.acrux-container');

(async function () {
    const catalog = await import('catalog/page');
    const layout = await import('layout/page');
    
    const navbarElement = document.createElement(layout.elementName);
    const catalogElement = document.createElement(catalog.elementName);

    container.appendChild(navbarElement);
    container.appendChild(catalogElement);
})();

export {};