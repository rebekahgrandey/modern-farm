
export const harvestPlants = (plants) => {
    const harvestArray = []
    for (const plant of plants){
        if (plant !== "Corn"){
            for (let i = 0; i < plant.output; i++){
                harvestArray.push(plant)
            } 
        } else {
            for (let i = 0; i < plant.output / 2; i++){
            harvestArray.push(plant)
            }
            
        }
    }
    return harvestArray
}


// * plant.output .