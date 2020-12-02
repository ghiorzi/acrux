const routes = new Map<string, string>(
    [
        ['/', 'catalog/page'],
        ['/checkout', 'checkout/page'],
    ]
); 

export function setupRoutes(container: Element): void {
    window.addEventListener("popstate", async () => {
        const moduleName: string = routes.get(window.location.pathname);
        const module = await import(moduleName);
        
        const element: Element = document.createElement(module.elementName);
    
        container.innerHTML = element.innerHTML;
    });
}