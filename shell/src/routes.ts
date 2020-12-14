const routes = new Map<string, Function>(
    [
        ['/', async () => await import('catalog/page')],
        ['/checkout', async () => await import('checkout/page')],
    ]
); 

export function setupRoutes(container: Element): void {
    window.addEventListener("popstate", async () => {
        const loadChunk: Function = routes.get(window.location.pathname);
        const module = await loadChunk();
        
        const element: Element = document.createElement(module.elementName);
       
        container.removeChild(container.childNodes[0]);
        container.appendChild(element);
    });
}