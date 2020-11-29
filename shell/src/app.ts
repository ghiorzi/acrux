import "./styles.css";

const container: Element = document.querySelector('.acrux-container');

(async function () {
    const module = await import('catalog/page');
    const element = document.createElement(module.elementName);

    container.appendChild(element);
})();

export {};