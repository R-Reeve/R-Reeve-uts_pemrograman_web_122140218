import { useEffect, useState } from "react";
import { fetchGames } from "../api/api";
import GameCard from "../components/GameCard";

const Home = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchGames().then(setGames);
  }, []);

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
    </div>
  );
};

export default Home;
