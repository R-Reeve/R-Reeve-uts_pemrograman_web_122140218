import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { fetchGames } from "../api/api";
import ReviewCard from "../components/ReviewCard";

const triviaList = [
  "Final Fantasy I dirilis pada tahun 1987 sebagai upaya terakhir Square sebelum bangkrut—dan justru menjadi awal kesuksesan besar.",
  "Final Fantasy I memperkenalkan sistem job class yang bisa berubah menjadi job lanjutan di tengah permainan.",
  "Final Fantasy II menggunakan sistem leveling yang unik, yaitu dengan meningkatkan skill berdasarkan aksi yang dilakukan, bukan EXP.",
  "Final Fantasy II adalah seri pertama yang memperkenalkan karakter dengan nama dan cerita yang kuat, seperti Firion dan Maria.",
  "Final Fantasy IX dirancang sebagai 'surat cinta' untuk penggemar seri klasik Final Fantasy.",
  "Final Fantasy IX memiliki referensi dan penghormatan terhadap banyak game Final Fantasy sebelumnya.",
  "Karakter Vivi dari Final Fantasy IX adalah salah satu karakter paling dicintai dalam seluruh seri karena kisah hidupnya yang menyentuh.",
  "Final Fantasy IX adalah game terakhir di seri utama yang dirilis di PlayStation 1.",
  "Final Fantasy X adalah game pertama di seri yang menampilkan voice acting untuk para karakternya.",
  "Final Fantasy X memperkenalkan sistem Sphere Grid untuk pengembangan karakter yang fleksibel dan unik.",
  "Yuna dari Final Fantasy X menjadi karakter wanita paling ikonik dalam sejarah Final Fantasy karena kisah pengorbanannya.",
  "Final Fantasy X adalah satu-satunya game yang mendapatkan sekuel langsung dalam bentuk Final Fantasy X-2.",
  "Final Fantasy XII menggunakan sistem Gambit, yang memungkinkan pemain memprogram aksi karakter secara otomatis.",
  "Final Fantasy XII adalah seri pertama yang memperkenalkan pertempuran tanpa transisi ke layar pertempuran terpisah (seamless battle).",
  "Vaan, karakter utama Final Fantasy XII, awalnya tidak direncanakan menjadi protagonis utama.",
  "Final Fantasy XII menampilkan dunia Ivalice, dunia yang juga digunakan dalam Final Fantasy Tactics dan Vagrant Story.",
  "Final Fantasy XII: The Zodiac Age adalah versi remaster dari FF XII dengan sistem job Zodiac dari versi eksklusif Jepang sebelumnya.",
  "The Zodiac Age memperkenalkan License Board baru yang memungkinkan pemain memilih dua job untuk tiap karakter.",
  "Final Fantasy XII: The Zodiac Age memperbaiki banyak aspek gameplay seperti kecepatan permainan dan balancing musuh.",
  "Final Fantasy XII: The Zodiac Age memungkinkan pemain untuk mempercepat permainan hingga 4x kecepatan.",
  "Final Fantasy I menampilkan empat Light Warriors sebagai karakter utama yang bisa dipilih dengan job berbeda.",
  "Final Fantasy X memperkenalkan Blitzball, mini-game berbasis olahraga air yang sangat populer dan kompleks.",
  "Final Fantasy IX kembali ke gaya seni fantasi klasik dengan kota-kota bertema abad pertengahan dan desain monster retro.",
  "Final Fantasy II memperkenalkan Chocobo untuk pertama kalinya dalam seri, sebagai sarana transportasi cepat.",
  "Final Fantasy IX memiliki ending yang menyentuh dan sangat emosional yang banyak diakui oleh penggemar dan kritikus.",
  "Final Fantasy X memiliki salah satu plot twist paling ikonik dalam seri, terutama terkait dengan karakter Tidus dan Yuna.",
];

const Home = () => {
  const [games, setGames] = useState([]);
  const [trivia, setTrivia] = useState("");
  const navigate = useNavigate(); // Hook untuk navigasi

  useEffect(() => {
    fetchGames().then(setGames);
    getRandomTrivia();
  }, []);

  const getRandomTrivia = () => {
    const randomIndex = Math.floor(Math.random() * triviaList.length);
    setTrivia(triviaList[randomIndex]);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 rounded-lg text-center text-white mb-6 shadow-lg">
        <h1 className="font-title text-4xl font-bold">Some Of Final Fantasy Games I've Ever Played</h1>
        <p className="mt-2 text-lg opacity-90">A collection of my personal favorite Final Fantasy games and experiences.</p>
      </div>
      
      {/* Game List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {games.map((review) => (
          <div className="transition-transform transform hover:scale-105" key={review.id}>
            <ReviewCard key={review.id} review={review} />
          </div>
        ))}
      </div>

      {/* Trivia Section */}
      <div className="mt-8 p-6 bg-gray-800 text-white rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-2">Final Fantasy Trivia</h2>
        <p className="text-lg italic">"{trivia}"</p>
        <button
          onClick={getRandomTrivia}
          className="mt-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-purple-400 text-white px-4 py-2 rounded-lg"
        >
          Tampilkan Trivia Lain
        </button>
      </div>

      {/* Tombol Lihat Review */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={() => navigate("/reviews")} // Navigasi ke halaman review
          className="bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-purple-400 text-white px-6 py-3 rounded-lg text-lg font-bold shadow-md"
        >
          Lihat Review
        </button>
      </div>
    </div>
  );
};

export default Home;
