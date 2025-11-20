``` Mermaid
sequenceDiagram
participant Main
participant Plan
participant Tractor
participant Harvester
participant Corn
participant Asparagus
participant Potato
participant Wheat
participant Sunflower
participant Soybean
participant Field


Main --> Plan: createPlan
Plan --> Main: return yearlyPlan
Main --> Tractor: plantSeeds
Tractor --> Corn: createCorn
Corn --> Tractor: return Corn
Tractor --> Field: addPlant
Tractor --> Asparagus: createAsparagus
Asparagus --> Tractor: return Asparagus
Tractor --> Field: addPlant
Tractor --> Potato: createPotato
Potato --> Tractor: return Potato
Tractor --> Field: addPlant
Tractor --> Wheat: createWheat
Wheat --> Tractor: return Wheat
Tractor --> Field: addPlant
Tractor --> Sunflower: createSunflower
Sunflower --> Tractor: return Sunflower
Tractor --> Field: addPlant
Tractor --> Soybean: createSoybean
Soybean --> Tractor: return Soybean
Tractor --> Field: addPlant
Tractor --> Field: usePlants
Field --> Tractor: copy of the array of plants
Main --> Harvester: havestPlants
Harvester --> Main: copy of the array of seed objects
```