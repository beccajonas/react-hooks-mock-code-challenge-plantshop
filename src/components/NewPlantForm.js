import React, {useState} from "react";

function NewPlantForm({ handleNewPlant }) {

  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState('')

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
    const newPlant = {
      name,
      image,
      price
    }
    handleNewPlant(newPlant)
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
        />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
        onChange={handleImageInput} 
        />
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price" 
          onChange={handlePriceInput} 
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;