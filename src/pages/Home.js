// Mengimpor React hooks dan fungsi dari React Router
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Mengimpor fungsi untuk mengambil data trivia dari API
import { fetchTrivias } from "../api/api";

// Komponen utama untuk halaman Home
const Home = () => {
  // State untuk menyimpan daftar trivia yang diambil dari API
  const [triviaList, setTriviaList] = useState([]);

  // State untuk menyimpan satu trivia yang akan ditampilkan ke pengguna
  const [trivia, setTrivia] = useState("");

  // State untuk menandai apakah trivia sedang dimuat
  const [isLoading, setIsLoading] = useState(true);

  // Hook untuk navigasi halaman menggunakan React Router
  const navigate = useNavigate();

  // Fungsi untuk memilih dan menampilkan satu trivia secara acak
  const getRandomTrivia = (data) => {
    const source = data || triviaList; // Gunakan data dari argumen jika ada, kalau tidak pakai dari state
    if (source.length > 0) {
      const randomIndex = Math.floor(Math.random() * source.length); // Pilih index acak
      setTrivia(source[randomIndex].text); // Simpan trivia yang dipilih
    }
  };

  // useEffect dijalankan sekali saat komponen pertama kali dimuat
  useEffect(() => {
    // Set isLoading true saat mulai mengambil data
    setIsLoading(true);
    fetchTrivias().then((data) => {
      setTriviaList(data);       // Simpan daftar trivia
      getRandomTrivia(data);     // Tampilkan salah satu trivia secara acak
      setIsLoading(false);       // Setelah data selesai dimuat, matikan loading
    });
  }, []);

  return (
    <div className="container mx-auto p-4">
      {/* Header dengan judul dan deskripsi */}
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 rounded-lg text-center text-white mb-6 shadow-lg">
        <h1 className="font-title text-4xl font-bold">
          Some Of Final Fantasy Games I've Ever Played
        </h1>
        <p className="mt-2 text-lg opacity-90">
          A collection of my personal favorite Final Fantasy games and experiences.
        </p>
      </div>

      {/* Section Trivia */}
      <div className="mt-8 p-6 bg-gray-800 text-white rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-2">Final Fantasy Trivia</h2>

        {/* Tampilkan loading atau trivia */}
        {isLoading ? (
          <p className="text-lg italic animate-pulse">Loading trivia...</p>
        ) : (
          <p className="text-lg italic">"{trivia}"</p>
        )}

        {/* Tombol untuk menampilkan trivia baru, disable saat loading */}
        <button
          onClick={() => getRandomTrivia()} // Ambil trivia lain secara acak
          disabled={isLoading}
          className={`mt-4 px-4 py-2 rounded-lg text-white transition ${
            isLoading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          Tampilkan Trivia Lain
        </button>
      </div>

      {/* Tombol navigasi ke halaman review */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={() => navigate("/reviews")} // Arahkan ke halaman /reviews saat diklik
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-bold shadow-md"
        >
          Lihat Review
        </button>
      </div>
    </div>
  );
};

// Mengekspor komponen Home agar bisa digunakan di dalam routing
export default Home;