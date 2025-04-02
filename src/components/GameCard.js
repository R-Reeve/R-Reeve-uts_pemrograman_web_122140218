import { Link } from "react-router-dom";

const GameCard = ({ game }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-white">
      <img src={game.background_image} alt={game.name} className="rounded-md" />
      <h2 className="text-lg font-bold mt-2">{game.name}</h2>
      <p className="text-sm">Rating: {game.rating}</p>
      <Link to={`/game/${game.id}`} className="text-blue-400">View Details</Link>
    </div>
  );
};

export default GameCard;