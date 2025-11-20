export const plantSeeds = (yearlyPlan) => {

    for (const row of yearlyPlan) {
        for (const plant of row) {
            if (plant === "Asparagus") {
                addPlant(createAsparagus())
            } else if (plant === "Corn") {
                addPlant(createCorn())
            } else if (plant === "Potato") {
                addPlant(createPotato())
            } else if (plant === "Wheat") {
                addPlant(createWheat())
            } else if (plant === "Sunflower") {
                addPlant(createSunflower())
            } else if (plant === "Soybean") {
                addPlant(createSoybean())
            }
        }
    }
}