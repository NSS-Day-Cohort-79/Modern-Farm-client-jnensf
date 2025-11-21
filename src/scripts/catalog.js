export const getCatalogHTML = (harvest) => {
    let catalogHTML = `<div class="container--crops">`

    for (const h of harvest) {
        catalogHTML += `
        <p class="crop">${h.type}</p>
        `
    }

    catalogHTML += `</div>`
    return catalogHTML;
}