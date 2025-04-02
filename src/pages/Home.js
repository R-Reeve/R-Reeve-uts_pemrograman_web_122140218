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
      <h1 className="font-title text-3xl font-bold text-white mb-4">🔥 Popular Games</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default Home;