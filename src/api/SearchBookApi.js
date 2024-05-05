import axios from 'axios';

const API_URL = 'http://localhost:8080/api';


const findInfoSearch = async (genresOption,valueFind) => {
    try {
      const response = await axios.get(`${API_URL}/results/search`,{
        params: {
          genresOption: genresOption,
          valueFind: valueFind
        }
      });
      return response;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  export default {
    findInfoSearch
  };