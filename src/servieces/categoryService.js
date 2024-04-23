import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

const getCategoryGenres = async () => {
  try {
    const response = await axios.get(`${API_URL}/category-genres`);
    // console.log('API Response:',response);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}
export default {
  getCategoryGenres
};
