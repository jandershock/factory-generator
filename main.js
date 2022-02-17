import * as RB from "./reindeer-builder.js";
import * as modWebpage from "./modify-webpage.js";

//Create Reindeer Array
const colorGen = RB.colorGenerator;
const reindeerArr = RB.coloredReindeerBuilder();

//Modify HTML
modWebpage.insertSectionElement(reindeerArr);