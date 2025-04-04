import { useParams, useNavigate } from "react-router-dom";
import reviews from "../reviews/dummyReviews";

const ReviewDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const review = reviews.find((r) => r.id === parseInt(id));

  if (!review) return <p className="text-white text-center text-lg">Review tidak ditemukan!</p>;

  return (
    <div className="container mx-auto p-6 text-white">
      <button
        onClick={() => navigate(-1)}
        className="bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-80 text-white px-5 py-2 rounded-md mb-6"
      >
        ⬅ Kembali
      </button>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">{review.title}</h1>
        <img src={review.image} alt={review.title} className="rounded-lg w-128 mx-auto object-cover" />
        <p className="text-lg mt-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: review.content }}></p>
        <span className="block text-xl font-bold text-yellow-400 mt-4">⭐ {review.rating}/10</span>
      </div>
    </div>
  );
};

export default ReviewDetail;