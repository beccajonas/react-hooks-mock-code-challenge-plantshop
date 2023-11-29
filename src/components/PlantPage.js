import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({}) {

  const [ plants, setPlants ] = useState([])
  const [ search, setSearch ] = useState("")

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(res => res.json())
    .then(data => setPlants(data))
  }, [])

  const filteredPlants = plants.filter(plant => 
    plant.name.toLowerCase().includes(search))

    function handleNewPlant(plantSubmission) {
      console.log(plantSubmission);
      fetch('http://localhost:6001/plants', {
        method: 'POST',
        headers: {
          "content-type" : "application/json"
        },
        body: JSON.stringify(plantSubmission)
      })
      .then(res => res.json())
      .then(newPlant => setPlants([...plants, newPlant]))
    }
  
    function handleDeletePlant(plantId) {
      fetch(`http://localhost:6001/plants/${plantId}`, {
        method: "DELETE",
        headers: {
          "content-type" : "application/json"
        }
      })
      const filteredPlants = plants.filter(plant => 
        plant.id !== plantId)
      setPlants(filteredPlants)
    }


  return (
    <main>
      <NewPlantForm handleNewPlant={handleNewPlant} />
      <Search setSearch={setSearch} />
      <PlantList 
      plants={filteredPlants} 
      handleDeletePlant={handleDeletePlant}
      />
    </main>
  );
}

export default PlantPage;