import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { usePlants } from "./field.js"

console.log("Welcome to the main module")

// invoke createPlan from Plan
const yearlyPlan = createPlan()

//create a seed
const asparagusSeed = createAsparagus()
console.log(asparagusSeed)


addPlant(asparagusSeed)
let fieldPlants = usePlants()

console.log(fieldPlants)

// tractor
// invoke plant seeds from tractor
plantSeeds(yearlyPlan)

// invoke use seeds from field
const getPlantsFields = usePlants()