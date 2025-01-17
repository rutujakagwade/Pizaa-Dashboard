import React, { useState } from "react";

const AddPizzaForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image.");
      return;
    }

    const priceNumber = parseFloat(price);
    if (isNaN(priceNumber) || priceNumber <= 0) {
      alert("Please provide a valid price greater than zero.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", priceNumber); // Sending price as a number
    formData.append("image", image);

    // Log form data as a single grouped structure
    console.log("Form Data:");
    console.log({
      name,
      price: priceNumber,
      image: image ? image.name : null, // Show file name instead of File object
    });

    try {
      const response = await fetch("http://localhost:5000/api/pizzas", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      // Log response data as a single grouped structure
      console.log("Response Data:", {
        name: data.name,
        price: data.price,
        image: data.image,
        _id: data._id,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
      });

      if (response.ok) {
        alert(`Pizza ${data.name} added!`);
        setName("");
        setPrice("");
        setImage(null);
      } else {
        alert("Error adding pizza.");
      }
    } catch (error) {
      console.error("Error adding pizza:", error);
      alert("Error adding pizza.");
    }
  };

  return (
    <div className="p-6 bg-[#FFDDC1] min-h-screen">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Add New Pizza</h2>
      <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label>Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-full"
        >
          Add Pizza
        </button>
      </form>
    </div>
  );
};

export default AddPizzaForm;
