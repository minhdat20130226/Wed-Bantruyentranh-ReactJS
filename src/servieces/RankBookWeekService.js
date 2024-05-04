import RankBookWeekApi from "../api/RankBookWeekApi";

const getRecommendedBooks = async () => {
    try {
      const response = await RankBookWeekApi.getRecommendedBooks();
      return response.data.data.bookRecommended
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }
  
  export default {
    getRecommendedBooks
  };