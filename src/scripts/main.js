console.log("Welcome to the main module")

import { createPlan } from './plan.js'
import { addPlant } from './field.js'
import { usePlants } from './field.js'
import { createAsparagus } from './seeds/asparagus.js'
import { createCorn } from './seeds/corn.js'

const yearlyPlan = createPlan()

console.log(yearlyPlan)

const asparagus = createAsparagus()
const corn = createCorn()

const addAsparagus = addPlant(asparagus)
const useAsparagus = usePlants(addAsparagus)
console.log(useAsparagus)

const addCorn = addPlant(corn)
const useCorn = usePlants(addCorn)
console.log(useCorn)


