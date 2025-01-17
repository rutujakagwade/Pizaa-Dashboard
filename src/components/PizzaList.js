import React, { useState, useEffect } from "react";
import axios from 'axios';
import { deletePizza } from "../services/api"; // Import delete service

const PizzaList = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/pizzas");
        setPizzas(response.data);
      } catch (error) {
        alert("Error fetching pizzas!");
      }
    };
    fetchPizzas();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deletePizza(id); // Use deletePizza service function
      setPizzas(pizzas.filter((pizza) => pizza._id !== id)); // Update state after deletion
      alert("Pizza deleted successfully!");
    } catch (error) {
      alert("Error deleting pizza!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Pizza List</h2>
      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {pizzas.map((pizza) => (
            <tr key={pizza._id}>
              <td className="border p-2">{pizza.name}</td>
              <td className="border p-2">${pizza.price}</td>
              <td className="border p-2">
                <button
                  onClick={() => handleDelete(pizza._id)}
                  className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition duration-300"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PizzaList;
