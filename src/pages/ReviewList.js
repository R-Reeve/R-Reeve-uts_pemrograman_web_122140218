// Mengimpor data review dari file lokal
import reviews from "../reviews/DataReviews";

// Mengimpor komponen ReviewCard untuk menampilkan satu review dalam bentuk card
import ReviewCard from "../components/ReviewCard";

// Komponen utama untuk menampilkan daftar semua review
const ReviewList = () => {
  return (
    <div className="container mx-auto p-6 text-white">
      {/* Judul halaman */}
      <h1 className="text-4xl font-bold text-center mb-4">Review Final Fantasy</h1>

      {/* Deskripsi singkat */}
      <p className="text-lg text-center mb-6">
        Berikut adalah beberapa review dari game Final Fantasy yang pernah saya mainkan.
      </p>

      {/* Menampilkan semua review dalam bentuk grid responsif */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Looping melalui semua data review dan render komponen ReviewCard untuk masing-masing */}
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

// Mengekspor komponen agar bisa digunakan dalam routing
export default ReviewList;