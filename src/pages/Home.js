import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchGames, fetchTrivias } from "../api/api";
import ReviewCard from "../components/ReviewCard";

const Home = () => {
  const [games, setGames] = useState([]);
  const [triviaList, setTriviaList] = useState([]);
  const [trivia, setTrivia] = useState("");
  const navigate = useNavigate();

  const getRandomTrivia = (data) => {
    const source = data || triviaList;
    if (source.length > 0) {
      const randomIndex = Math.floor(Math.random() * source.length);
      setTrivia(source[randomIndex].text);
    }
  };

  useEffect(() => {
    fetchGames().then(setGames);
    fetchTrivias().then((data) => {
      setTriviaList(data);
      getRandomTrivia(data); // hanya sekali saat data masuk
    });
  }, []); // ✅ Tidak tergantung ke getRandomTrivia

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
            <ReviewCard review={review} />
          </div>
        ))}
      </div>

      {/* Trivia Section */}
      <div className="mt-8 p-6 bg-gray-800 text-white rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-2">Final Fantasy Trivia</h2>
        <p className="text-lg italic">"{trivia}"</p>
        <button
          onClick={() => getRandomTrivia()}
          className="mt-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-purple-400 text-white px-4 py-2 rounded-lg"
        >
          Tampilkan Trivia Lain
        </button>
      </div>

      {/* Tombol Lihat Review */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={() => navigate("/reviews")}
          className="bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-purple-400 text-white px-6 py-3 rounded-lg text-lg font-bold shadow-md"
        >
          Lihat Review
        </button>
      </div>
    </div>
  );
};

export default Home;