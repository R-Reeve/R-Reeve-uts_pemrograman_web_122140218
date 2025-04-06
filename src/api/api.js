// Mengimpor library axios, yang berguna untuk melakukan request HTTP ke server/API
import axios from "axios";

// URL endpoint dari API yang menyediakan data trivia
const TRIVIA_API_URL = "https://67f2273dc733555e24aee47b.mockapi.io/trivias";

// Fungsi asynchronous (karena menggunakan 'await') untuk mengambil data trivia dari API
export const fetchTrivias = async () => {
  try {
    // Melakukan request GET ke URL API, dan menunggu hasilnya
    const response = await axios.get(TRIVIA_API_URL);
    
    // Mengembalikan data yang diterima dari API (biasanya berupa array of trivia)
    return response.data;
  } catch (error) {
    // Jika terjadi kesalahan (misalnya koneksi error atau API down), tampilkan error-nya di konsol
    console.error("Error fetching trivia:", error);
    
    // Kembalikan array kosong sebagai fallback agar program tidak crash
    return [];
  }
};