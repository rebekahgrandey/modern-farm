import { addPlant } from './field.js'
import { createAsparagus } from './seeds/asparagus.js'
import { createCorn } from './seeds/corn.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'

const asparagus = createAsparagus()
const corn = createCorn()
const potato = createPotato()
const soybean = createSoybean()
const sunflower = createSunflower()
const wheat = createWheat()

// ? "invoke the createAsparagus function to get an asparagus seed" Aren't we invoking the addPlant function and passing the value of createAsparagus?

// ? "Take that seed and add it to the array of plants in the field module" Seed from plantSeeds...? plantSeeds doesn't return a value, so does it mean const asparagus?? 

export const plantSeeds = (plan) => {
    for (const row of plan){
        for (const plant of row){
           if (plant === "Asparagus"){
            addPlant(asparagus)
           } 
           else if (plant === "Corn"){
            addPlant(corn)
           }
           else if (plant === "Potato"){
            addPlant(potato)
           }
           else if (plant === "Soybean"){
            addPlant(soybean)
           }
           else if (plant === "Sunflower"){
            addPlant(sunflower)
           }
           else {
            addPlant(wheat)
           }
        }
    }
}