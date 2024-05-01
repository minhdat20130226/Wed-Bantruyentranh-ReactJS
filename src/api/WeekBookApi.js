import axios from 'axios';

const API_URL = 'http://localhost:8080/api';


const getAllNewBook = async () => {
    try {
      const response = await axios.get(`${API_URL}/new-book`);
      return response;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }
  
  const getAllComingSoonBook = async () => {
    try {
      const response = await axios.get(`${API_URL}/coming-soon-book`);
      console.log("adw",response)
      return response;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  const getAllBestSellBook = async () => {
    try {
      const response = await axios.get(`${API_URL}/best-sell-book`);
      return response;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }
  
  export default {
    getAllNewBook,getAllComingSoonBook,getAllBestSellBook
  };
  