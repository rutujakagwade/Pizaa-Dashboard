import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditPizza = () => {
  const [pizza, setPizza] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { id } = useParams(); // Get pizza id from the URL
  const navigate = useNavigate(); // For redirecting after saving changes

  useEffect(() => {
    // Fetch pizza data when the component is mounted
    const fetchPizza = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/pizzas/${id}`);
        setPizza(data);
      } catch (error) {
        alert("Error fetching pizza data!");
      }
    };
    fetchPizza();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPizza({ ...pizza, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/pizzas/${id}`, pizza);
      alert("Pizza updated successfully!");
      navigate("/dashboard"); // Redirect to dashboard after successful update
    } catch (error) {
      alert("Error updating pizza!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Edit Pizza</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full sm:w-96">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={pizza.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Price</label>
          <input
            type="number"
            name="price"
            value={pizza.price}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Image URL</label>
          <input
            type="text"
            name="image"
            value={pizza.image}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-6 rounded-lg w-full hover:bg-blue-600 transition duration-300"
        >
          Update Pizza
        </button>
      </form>
    </div>
  );
};

export default EditPizza;
