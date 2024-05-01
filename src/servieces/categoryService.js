import categoryGenresApi from '../api/categoryGenresApi';

const getCategoryGenres = async () => {
  try {
    const categoryGenres = await categoryGenresApi.getCategoryGenres();
      return categoryGenres.data.data.category;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  };

export default {
  getCategoryGenres
};