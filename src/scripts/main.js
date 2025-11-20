import { createPlan } from "./plan"
import { plantSeeds } from "./tractor"

console.log("Welcome to the main module")

// invoke createPlan from Plan
const yearlyPlan = createPlan()

// tractor
// invoke plant seeds from tractor
plantSeeds(yearlyPlan)

// invoke use seeds from field
const getPlantsFields = usePlants()