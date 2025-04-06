// Mengimpor hook dari React Router untuk mengambil parameter dari URL dan melakukan navigasi
import { useParams, useNavigate } from "react-router-dom";

// Mengimpor data review yang disimpan secara lokal
import reviews from "../reviews/DataReviews";

// Komponen ReviewDetail untuk menampilkan detail satu review berdasarkan ID
const ReviewDetail = () => {
  const { id } = useParams(); // Mengambil parameter "id" dari URL
  const navigate = useNavigate(); // Hook untuk navigasi (mundur, maju, pindah halaman)

  // Cari review yang ID-nya sesuai dengan parameter dari URL
  const review = reviews.find((r) => r.id === parseInt(id));

  // Jika review tidak ditemukan, tampilkan pesan error
  if (!review)
    return (
      <p className="text-white text-center text-lg">
        Review tidak ditemukan!
      </p>
    );

  return (
    <div className="container mx-auto p-6 text-white">
      {/* Tombol untuk kembali ke halaman sebelumnya */}
      <button
        onClick={() => navigate(-1)} // -1 artinya mundur ke halaman sebelumnya
        className="bg-blue-500 hover:opacity-80 text-white px-5 py-2 rounded-md mb-6"
      >
        ⬅ Kembali
      </button>

      <div className="max-w-3xl mx-auto">
        {/* Judul review ditampilkan besar dan di tengah */}
        <h1 className="text-4xl font-bold text-center mb-4">{review.title}</h1>

        {/* Gambar review */}
        <img
          src={review.image} // Gambar yang diambil dari data
          alt={review.title} // Alternatif teks untuk aksesibilitas
          className="rounded-lg w-64 mx-auto object-cover"
        />

        {/* Isi konten review (bisa mengandung HTML) */}
        {/* Gunakan dengan hati-hati karena menggunakan raw HTML */}
        <p
          className="text-lg mt-4 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: review.content }}
        ></p>

        {/* Rating ditampilkan dalam box khusus di bagian bawah */}
        <div className="mt-6 flex justify-center">
          <div className="bg-gray-800 rounded-lg p-4 shadow-md w-52 text-center">
            <p className="text-sm text-gray-400 tracking-wide">Rating</p>
            <p className="text-3xl font-bold text-yellow-400">
              {review.rating}/10
            </p>
          </div>
        </div>
      </div> 
    </div>
  );
};

// Mengekspor komponen agar bisa digunakan di routing
export default ReviewDetail;