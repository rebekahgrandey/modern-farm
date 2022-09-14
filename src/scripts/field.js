const growingPlants = []

// This function will add the seed to the field. Must accept a seed object as input
export const addPlant = (seedObject) => {
    if(Array.isArray(seedObject)){
        for (const seed of seedObject) {
            growingPlants.push(seed)
        }
    } else {
    growingPlants.push(seedObject)}
}
// returns a copy of the array of plants
export const usePlants = () => {   
    return growingPlants.map(plant => ({...plant}))
}

// Goal: Get all seed objects added to growingPlants

// -at top, import seed objects from their seeds folders
// -invoke functions and assign a variable to each
// -in addPlant, use .push method & seed object as input. Push to growingPlants. Corn is an array, so check if corn is an array (are we checking because we KNOW it will return true and therefore push it?). If returns true, push corn to array.

// -return a copy of growingPlants in the usePlants function using .map