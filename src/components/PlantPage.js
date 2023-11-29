import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({}) {

  const [ plants, setPlants ] = useState([])
  const [ search, setSearch ] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: ""
  })
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(res => res.json())
    .then(data => setPlants(data))
  }, [])

  const filteredPlants = plants.filter(plant => 
    plant.name.toLowerCase().includes(search))

    function handleNewPlant() {
     if (formData.id) {
      fetch(`http://localhost:6001/plants/${formData.id}`, {
        method: 'PATCH',
        headers: {
          "content-type" : "application/json"
        },
        body: JSON.stringify(formData)
      })
      .then(res => res.json())
      .then((updatedPlant) => {
        const updatedPlants = plants.map((plant) =>
          plant.id === updatedPlant.id ? updatedPlant : plant
        );
        setPlants(updatedPlants)})
     } else { 
      fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(plantSubmission => setPlants([...plants, plantSubmission]))
  }}

  
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
      <NewPlantForm 
        handleNewPlant={handleNewPlant}
        setName={setName}
        setImage={setImage}
        setPrice={setPrice}
        name={name}
        image={image}
        price={price} />
      <Search 
        setSearch={setSearch} />
      <PlantList 
        plants={filteredPlants} 
        handleDeletePlant={handleDeletePlant} 
        setFormData={setFormData} />
    </main>
  );
}

export default PlantPage;
