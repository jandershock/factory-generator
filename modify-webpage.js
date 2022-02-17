export const insertSectionElement = (reindeerArr) => {
    const coloredReindeerElement = document.getElementById('colored-reindeer');
    reindeerArr.forEach(element => {
        // coloredReindeerElement.textContent += `<section style="color: ${element.color}">${element.name}</section>`;
        let tag = document.createElement("section");
        tag.style=`color: ${element.color}`
        let text = document.createTextNode(`${element.name}`)
        tag.appendChild(text);
        coloredReindeerElement.appendChild(tag);
    });
}