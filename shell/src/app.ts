import { setupRoutes } from "./routes";
import "./styles.css";

const layoutContainer: Element = document.querySelector('.layout-container');
const appContainer: Element = document.querySelector('.app-container');

(async function () {
    const catalog = await import('catalog/page');
    const layout = await import('layout/page');
    
    const navbarElement = document.createElement(layout.elementName);
    const catalogElement = document.createElement(catalog.elementName);

    layoutContainer.appendChild(navbarElement);
    appContainer.appendChild(catalogElement);

    setupRoutes(appContainer);
})();

export {};