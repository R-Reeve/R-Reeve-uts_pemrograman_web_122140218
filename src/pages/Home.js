import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchTrivias } from "../api/api";

const Home = () => {
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
    fetchTrivias().then((data) => {
      setTriviaList(data);
      getRandomTrivia(data);
    });
  }, []);

  return (
    <div className="container mx-auto p-4">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 rounded-lg text-center text-white mb-6 shadow-lg">
        <h1 className="font-title text-4xl font-bold">Some Of Final Fantasy Games I've Ever Played</h1>
        <p className="mt-2 text-lg opacity-90">A collection of my personal favorite Final Fantasy games and experiences.</p>
      </div>

      {/* Trivia Section */}
      <div className="mt-8 p-6 bg-gray-800 text-white rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-2">Final Fantasy Trivia</h2>
        <p className="text-lg italic">"{trivia}"</p>
        <button
          onClick={() => getRandomTrivia()}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Tampilkan Trivia Lain
        </button>
      </div>

      {/* Tombol Lihat Review */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={() => navigate("/reviews")}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-bold shadow-md"
        >
          Lihat Review
        </button>
      </div>
    </div>
  );
};

export default Home;
