import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, handleDeletePlant, setFormData }) {

  const renderPlants = plants.map(plants => 
    <PlantCard 
      plants={plants} 
      key={plants.id} 
      handleDeletePlant={handleDeletePlant} 
    />)

  return (
    <ul className="cards">{renderPlants}</ul>
  );
}

export default PlantList;