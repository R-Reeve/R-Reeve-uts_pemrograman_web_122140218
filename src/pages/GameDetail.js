import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchGameDetail } from "../api/api";

const GameDetail = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    fetchGameDetail(id).then(setGame);
  }, [id]);

  if (!game) return <p className="text-white">Loading...</p>;

  return (
    <div className="container mx-auto p-4 text-white">
      <h1 className="text-3xl font-bold">{game.name}</h1>
      <img src={game.background_image} alt={game.name} className="rounded-lg my-4" />
      <p dangerouslySetInnerHTML={{ __html: game.description }}></p>
    </div>
  );
};

export default GameDetail;