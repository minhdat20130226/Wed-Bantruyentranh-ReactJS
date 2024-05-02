import TopicGroupApi from "../api/TopicGroupApi";

const getUdInDayBook = async () => {
    try {
      const response = await TopicGroupApi.getUdInDayBook();
      return response.data.data.bookMaxReductionRate
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
  }
  
  
const getMaxIsLikeBook = async () => {
    try {
      const response = await TopicGroupApi.getMaxIsLikeBook();
      return response.data.data.bookMaxLike
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }
  

  const getPopularBook = async () => {
    try {
      const response = await TopicGroupApi.getPopularBook();
      return response.data.data.bookPopularTop
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  const getNewBook = async () => {
    try {
      const response = await TopicGroupApi.getNewBook();
      return response.data.data.bookNew
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }
  
  export default {
    getUdInDayBook,getMaxIsLikeBook,getPopularBook,getNewBook
  };
  