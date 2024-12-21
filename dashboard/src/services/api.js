import axios from 'axios';

const API_URL = 'http://localhost:5000/api/pizzas';

// Fetch all pizzas
export const fetchPizzas = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching pizzas');
  }
};

// Delete a pizza by id
export const deletePizza = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    throw new Error('Error deleting pizza');
  }
};
