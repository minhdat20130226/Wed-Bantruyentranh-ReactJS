import axios from 'axios';

const API_URL = 'http://localhost:8080/api';


const getRecommendedBooks = async () => {
    try {
      const response = await axios.get(`${API_URL}/rank-book/recommended-books`);
      return response;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }
  
  
  
  export default {
    getRecommendedBooks
};
  