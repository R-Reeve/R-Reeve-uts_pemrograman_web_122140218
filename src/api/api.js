import axios from "axios";

const TRIVIA_API_URL = "https://67f2273dc733555e24aee47b.mockapi.io/trivias"; // Ganti dengan URL MockAPI kamu

export const fetchTrivias = async () => {
  try {
    const response = await axios.get(TRIVIA_API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching trivia:", error);
    return [];
  }
};