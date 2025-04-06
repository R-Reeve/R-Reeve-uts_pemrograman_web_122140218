// Komponen GameDetail akan menampilkan detail dari sebuah game
const GameDetail = () => {
  // Saat ini, data game masih bernilai null (belum diisi)
  const game = null;

  // Jika game tidak ditemukan (null), tampilkan pesan error
  if (!game) return <p className="text-white">Game tidak ditemukan.</p>;

  // Jika data game ada, maka tampilkan detail game-nya
  return (
    <div className="container mx-auto p-4 text-white">
      {/* Judul game dengan ukuran besar dan huruf tebal */}
      <h1 className="text-3xl font-bold">{game.name}</h1>

      {/* Gambar latar dari game */}
      <img
        src={game.background_image} // URL gambar dari game
        alt={game.name} // Alternatif teks untuk aksesibilitas
        className="rounded-lg my-4" // Sudut membulat dan margin vertikal
      />

      {/* Deskripsi game yang bisa mengandung HTML */}
      {/* Gunakan dengan hati-hati, karena raw HTML bisa berisiko XSS (Cross-site scripting) */}
      <p dangerouslySetInnerHTML={{ __html: game.description }}></p>
    </div>
  );
};

// Mengekspor komponen agar bisa digunakan di router atau komponen lain
export default GameDetail;