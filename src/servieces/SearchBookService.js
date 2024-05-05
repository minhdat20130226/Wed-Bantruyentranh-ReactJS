import SearchBookApi from "../api/SearchBookApi";

const findInfoSearch = async (genresOption, valueFind) => {
  try {
    if (genresOption && valueFind) {
      const response = await SearchBookApi.findInfoSearch(genresOption, valueFind);
      return response.data.data.bookMaxReductionRate;
    } else {
      console.log('genresOption or valueFind is missing.');
      return null;
    }
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

  export default {
    findInfoSearch
  };