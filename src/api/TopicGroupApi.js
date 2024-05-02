import axios from 'axios';

const API_URL = 'http://localhost:8080/api';


const getUdInDayBook = async () => {
    try {
      const response = await axios.get(`${API_URL}/topic/ud-in-day`);
      return response;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }
  
  
const getMaxIsLikeBook = async () => {
    try {
      const response = await axios.get(`${API_URL}/topic/max-is-like`);
      return response;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }
  

  const getPopularBook = async () => {
    try {
      const response = await axios.get(`${API_URL}/topic/popular-book`);
      console.log("adw",response)
      return response;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  const getNewBook = async () => {
    try {
      const response = await axios.get(`${API_URL}/topic/new-book`);
      return response;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }
  
  export default {
    getUdInDayBook,getMaxIsLikeBook,getPopularBook,getNewBook
  };
  