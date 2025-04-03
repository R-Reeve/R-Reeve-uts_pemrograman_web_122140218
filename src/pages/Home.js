import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { fetchGames } from "../api/api";
import GameCard from "../components/GameCard";

const triviaList = [
  "Final Fantasy VII adalah game pertama dalam seri yang menggunakan 3D CGI cutscenes.",
  "Final Fantasy X adalah game pertama dalam seri yang memiliki voice acting.",
  "Final Fantasy XV awalnya dikembangkan sebagai spin-off bernama Final Fantasy Versus XIII.",
  "Final Fantasy VI memiliki lebih dari 14 karakter yang dapat dimainkan.",
  "Final Fantasy IX dianggap sebagai game yang kembali ke akar seri dengan nuansa klasik.",
  "Final Fantasy XIV adalah satu-satunya game di seri yang awalnya gagal tetapi berhasil bangkit dengan re-launch yang sukses.",
  "Final Fantasy pertama (1987) dirilis sebagai 'perjudian terakhir' Square sebelum hampir bangkrut—dan ternyata sukses besar.",
  "Nama 'Final Fantasy' berasal dari keinginan Hironobu Sakaguchi untuk meninggalkan industri game jika game ini gagal.",
  "Final Fantasy IV (SNES, 1991) adalah game pertama yang memperkenalkan Active Time Battle (ATB).",
  "Final Fantasy VIII adalah satu-satunya game di seri yang tidak menggunakan sistem MP (Magic Points) untuk sihir.",
  "Final Fantasy XI adalah game pertama dalam seri yang sepenuhnya online MMORPG.",
  "Final Fantasy XII awalnya dirancang tanpa karakter utama yang dominan, tetapi Vaan ditambahkan karena permintaan pasar.",
  "Final Fantasy XIII memiliki trilogi game: XIII, XIII-2, dan Lightning Returns.",
  "Final Fantasy XV dikembangkan selama lebih dari 10 tahun, awalnya sebagai Final Fantasy Versus XIII sebelum berubah menjadi proyek tersendiri.",
  "Final Fantasy VII Remake tidak hanya merombak grafis tetapi juga mengubah banyak elemen gameplay dan cerita dari versi aslinya.",
  "Cid adalah satu-satunya karakter yang selalu muncul dalam setiap game Final Fantasy, meskipun dengan peran dan wujud yang berbeda.",
  "Moogles dan Chocobos adalah dua makhluk ikonik yang hampir selalu muncul dalam setiap game Final Fantasy.",
  "Final Fantasy XV adalah satu-satunya game dalam seri utama yang memiliki open-world eksplorasi penuh dengan mobil dan mekanik perjalanan jauh.",
  "Final Fantasy VI memiliki salah satu villain paling terkenal, Kefka Palazzo, yang benar-benar berhasil menghancurkan dunia dalam gamenya.",
  "Final Fantasy VII Advent Children adalah film CGI lanjutan dari Final Fantasy VII yang menjadi film animasi populer di kalangan penggemar.",
  "Final Fantasy X-2 adalah sekuel langsung pertama dalam sejarah Final Fantasy, melanjutkan kisah Final Fantasy X.",
  "Final Fantasy XIV memiliki lebih dari 30 juta pemain aktif, menjadikannya salah satu MMORPG paling sukses sepanjang masa.",
  "Final Fantasy VII Remake Part 2 (Rebirth) akan melanjutkan cerita remake dan memiliki gameplay yang lebih luas dibandingkan bagian pertama.",
  "Final Fantasy XVI (2023) membawa perubahan besar dengan gameplay aksi yang lebih cepat dan cerita yang lebih gelap dibandingkan game sebelumnya.",
  "Final Fantasy Crystal Chronicles (GameCube, 2003) adalah spin-off yang berfokus pada multiplayer co-op dengan gaya bermain yang berbeda dari seri utama."
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
        <h1 className="font-title text-4xl font-bold">🔥 Some Of Final Fantasy Games I've Ever Played</h1>
        <p className="mt-2 text-lg opacity-90">A collection of my personal favorite Final Fantasy games and experiences.</p>
      </div>
      
      {/* Game List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {games.map((game) => (
          <div className="transition-transform transform hover:scale-105" key={game.id}>
            <GameCard game={game} />
          </div>
        ))}
      </div>

      {/* Trivia Section */}
      <div className="mt-8 p-6 bg-gray-800 text-white rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-2">🎮 Final Fantasy Trivia</h2>
        <p className="text-lg italic">"{trivia}"</p>
        <button
          onClick={getRandomTrivia}
          className="mt-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-purple-400 text-white px-4 py-2 rounded-lg"
        >
          🔄 Tampilkan Trivia Lain
        </button>
      </div>

      {/* Tombol Lzihat Review */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={() => navigate("/reviews")} // Navigasi ke halaman review
          className="bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-purple-400 text-white px-6 py-3 rounded-lg text-lg font-bold shadow-md"
        >
          📢 Lihat Review
        </button>
      </div>
    </div>
  );
};

export default Home;
