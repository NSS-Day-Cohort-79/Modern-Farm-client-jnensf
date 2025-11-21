export const renderCatalogToDOM = (catalogHTML) => {
    const container = document.getElementById('container')

    if (container) {
        container.innerHTML = catalogHTML;
    } else {
        console.error("Could not find element with class container")
    }
}