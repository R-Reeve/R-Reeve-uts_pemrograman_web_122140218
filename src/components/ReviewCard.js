import { Link } from "react-router-dom";

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-white">
      <img src={review.image} alt={review.title} className="rounded-md w-full" />
      <h2 className="text-lg font-bold mt-2">{review.title}</h2>
      <p className="text-sm">{review.summary}</p>
      <span className="block font-bold text-yellow-400">⭐ {review.rating}/10</span>
      <Link to={`/review/${review.id}`} className="text-blue-400">Baca Selengkapnya</Link>
    </div>
  );
};

export default ReviewCard;