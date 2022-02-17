export const colorGenerator = function* () {
    const colors = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"];
    let counter = 0;
    while(true){
        yield colors[counter];
        if (counter < colors.length - 1){
            counter++;
        } else {
            counter = 0;
        }
    }
}

export const coloredReindeerBuilder = function () {
    const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]
    const coloredReindeer = [];
    const colorGen = colorGenerator();

    // Write a for loop that looks at each reindeer
        // Invoke factory function to create reindeer object
        reindeer.forEach((reindeer) => {
            // Put new reindeer object in coloredReindeer array
            coloredReindeer.push({
                name: `${reindeer}`, 
                color: `${colorGen.next().value}`
            })
        })

    // Return coloredReindeer array
    return coloredReindeer;
}
