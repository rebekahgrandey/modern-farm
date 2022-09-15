console.log("Welcome to the main module")

import { createPlan } from './plan.js'
import { addPlant } from './field.js'
import { usePlants } from './field.js'
import { createAsparagus } from './seeds/asparagus.js'
import { createCorn } from './seeds/corn.js'
import { plantSeeds } from './tractor.js'

const yearlyPlan = createPlan()
plantSeeds(yearlyPlan)
const arrayOfPlants = usePlants()
console.log(arrayOfPlants)

// console.log(yearlyPlan)

// const asparagus = createAsparagus()
// const corn = createCorn()


// const addAsparagus = addPlant(asparagus)
// const useAsparagus = usePlants(addAsparagus)
// console.log(useAsparagus)

// const addCorn = addPlant(corn)
// const useCorn = usePlants(addCorn)
// console.log(useCorn)


// const plantPlan = plantSeeds(yearlyPlan)
// console.log(plantPlan)

// const addThePlants = addPlant()
// const useThePlants = usePlants(addThePlants)
// console.log(useThePlants)

