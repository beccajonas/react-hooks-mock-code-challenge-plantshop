import React from "react";

function NewPlantForm({ handleNewPlant, setName, setImage, setPrice, name, image, price }) {

  function handleNameInput(e) {
    setName(e.target.value)
  }

  function handleImageInput(e) {
    setImage(e.target.value)
  }

  function handlePriceInput(e) {
    setPrice(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    handleNewPlant()
  }



  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Plant name" 
          onChange={handleNameInput}
          value={name}
        />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          onChange={handleImageInput} 
          value={image}
        />
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price" 
          onChange={handlePriceInput} 
          value={price}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
