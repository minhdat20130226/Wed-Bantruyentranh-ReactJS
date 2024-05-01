import WeekBookApi from "../api/WeekBookApi";


const getAllNewBook = async () => {
    try {
        const newBooks = await WeekBookApi.getAllNewBook();
        return newBooks.data.data.bookNew;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};

const getAllComingSoonBook = async () => {
    try {
        const comingSoonBooks = await WeekBookApi.getAllComingSoonBook(); 
        return comingSoonBooks.data.data.bookComingSoon;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};

const getAllBestSellBook = async () => {
    try {
        const bestSellBooks = await WeekBookApi.getAllBestSellBook();
        return bestSellBooks.data.data.bookBestSell ;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};

export default {
    getAllNewBook, getAllComingSoonBook,getAllBestSellBook
};