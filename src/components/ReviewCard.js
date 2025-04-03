import { Link } from "react-router-dom";

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-gray-800 p-5 rounded-lg shadow-lg text-white transition-transform transform hover:scale-105">
      <img src={review.image} alt={review.title} className="rounded-md w-full h-48 object-cover" />
      <h2 className="text-xl font-bold mt-3">{review.title}</h2>
      <p className="text-sm text-gray-300">{review.summary}</p>
      <span className="block font-bold text-yellow-400 my-2">⭐ {review.rating}/10</span>
      <Link
        to={`/review/${review.id}`}
        className="block text-center bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-80 text-white px-4 py-2 rounded-lg mt-3"
      >
        Baca Selengkapnya
      </Link>
    </div>
  );
};

export default ReviewCard;