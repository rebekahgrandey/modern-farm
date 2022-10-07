export const catalog = (harvest) => {
    let catalogHTML = `<main>`
    for (const food of harvest){
       if (food.type === "Corn") {
       }
       catalogHTML += `<section class="plant">${food.type}</section>`
    }
    catalogHTML += `</main>`
    return catalogHTML
}