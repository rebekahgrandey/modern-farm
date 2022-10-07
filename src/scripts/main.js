console.log("Welcome to the main module")

import { createPlan } from './plan.js'
import { usePlants } from './field.js'
import { plantSeeds } from './tractor.js'
import { harvestPlants } from './harvester.js'
import { catalog } from './catalog.js'


const yearlyPlan = createPlan()
plantSeeds(yearlyPlan)
const arrayOfPlants = usePlants()
console.log(arrayOfPlants)

const harvestArray = harvestPlants(arrayOfPlants)
console.log(harvestArray)
const catalogPlants = catalog(harvestArray)
console.log(catalogPlants)

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

const parentHTMLElement = document.querySelector(".container")


parentHTMLElement.innerHTML = catalog(harvestArray)