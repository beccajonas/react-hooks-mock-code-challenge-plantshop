import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {

  const renderPlants = plants.map(plants => 
    <PlantCard plants={plants} key={plants.id} />)

  return (
    <ul className="cards">{renderPlants}</ul>
  );
}

export default PlantList;
