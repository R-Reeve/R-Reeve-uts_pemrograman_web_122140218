// Mengimpor Link dari react-router-dom untuk navigasi antar halaman tanpa reload
import { Link } from "react-router-dom";

// Komponen ReviewCard menerima satu properti (props) bernama 'review'
// yang berisi data seperti judul, gambar, ringkasan, dan rating dari review game
const ReviewCard = ({ review }) => {
  return (
    // Kontainer utama kartu review
    // Warna latar belakang gelap, sudut membulat, bayangan lembut, teks putih, dan layout kolom
    <div className="bg-gray-800 rounded-xl shadow-lg text-white flex flex-col p-4">
      
      {/* Gambar game */}
      <img
        src={review.image} // URL gambar dari data review
        alt={review.title} // Teks alternatif untuk aksesibilitas
        className="rounded-md w-full h-48 object-cover mb-4" // Styling: ukuran tetap, gambar menyesuaikan proporsi, dan jarak bawah
      />

      {/* Judul game */}
      <h2 className="text-lg font-bold mb-2">{review.title}</h2>

      {/* Ringkasan singkat dari review */}
      <p className="text-sm text-gray-300 mb-4 flex-grow">
        {review.summary}
      </p>

      {/* Bagian bawah: Rating dan tombol, diletakkan di bawah dengan mt-auto */}
      <div className="mt-auto flex flex-col gap-2">
        
        {/* Rating game, ditampilkan dengan latar kuning dan teks tebal */}
        <div className="bg-yellow-400 text-black px-3 py-1 rounded-md text-sm font-bold shadow-md w-fit">
          {review.rating}/10
        </div>

        {/* Tombol untuk menuju halaman detail review berdasarkan id review */}
        <Link
          to={`/review/${review.id}`} // Path menuju detail review, misalnya: /review/1
          className="block bg-blue-500 text-white px-4 py-2 rounded-lg transition-opacity hover:opacity-80 text-center"
        >
          Baca Selengkapnya
        </Link>
      </div>
    </div>
  );
};

// Mengekspor komponen agar bisa digunakan di komponen lain seperti daftar review
export default ReviewCard;