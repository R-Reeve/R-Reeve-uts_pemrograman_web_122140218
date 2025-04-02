import axios from "axios";

const API_URL = "https://api.rawg.io/api/games";
const API_KEY = "YOUR_API_KEY"; // Ganti dengan API key dari RAWG.io

export const fetchGames = async () => {
  try {
    const response = await axios.get(`${API_URL}?key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching games:", error);
    return [];
  }
};

export const fetchGameDetail = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}?key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching game detail:", error);
    return null;
  }
};