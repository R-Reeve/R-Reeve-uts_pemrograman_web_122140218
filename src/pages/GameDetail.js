const GameDetail = () => {
  const game = null; // sementara hardcoded null biar render "Game tidak ditemukan."

  if (!game) return <p className="text-white">Game tidak ditemukan.</p>;

  return (
    <div className="container mx-auto p-4 text-white">
      <h1 className="text-3xl font-bold">{game.name}</h1>
      <img src={game.background_image} alt={game.name} className="rounded-lg my-4" />
      <p dangerouslySetInnerHTML={{ __html: game.description }}></p>
    </div>
  );
};

export default GameDetail;