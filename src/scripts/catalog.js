export const catalog = (harvest) => {
    let catalogHTML = `<ul class="container--crops">`

    for (const h of harvest) {
        catalogHTML += `
        <li class="crop">${h.type}</li>
        `
    }

    catalogHTML += `</ul>`
    return catalogHTML;
}