import { useParams, useNavigate } from "react-router-dom";
import reviews from "../reviews/dummyReviews";

const ReviewDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Untuk navigasi kembali ke halaman sebelumnya
  const review = reviews.find((r) => r.id === parseInt(id));

  if (!review) return <p className="text-white">Review tidak ditemukan!</p>;

  return (
    <div className="container mx-auto p-4 text-white">
      <button
        onClick={() => navigate(-1)} // Kembali ke halaman sebelumnya
        className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md mb-4"
      >
        ⬅ Kembali
      </button>

      <h1 className="text-3xl font-bold">{review.title}</h1>
      <img src={review.image} alt={review.title} className="rounded-lg my-4 w-auto mx-auto" block />
      <p className="text-lg" dangerouslySetInnerHTML={{ __html: review.content }}></p>
      <span className="block font-bold text-yellow-400">⭐ {review.rating}/10</span>
    </div>
  );
};

export default ReviewDetail;
