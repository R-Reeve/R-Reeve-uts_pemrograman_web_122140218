import { Link } from "react-router-dom";

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg text-white flex flex-col p-4">
      {/* Gambar */}
      <img
        src={review.image}
        alt={review.title}
        className="rounded-md w-full h-48 object-cover mb-4"
      />

      {/* Judul */}
      <h2 className="text-lg font-bold mb-2">{review.title}</h2>

      {/* Ringkasan */}
      <p className="text-sm text-gray-300 mb-4 flex-grow">{review.summary}</p>

      {/* Rating dan Tombol dibungkus agar selalu di bawah */}
      <div className="mt-auto flex flex-col gap-2">
        {/* Rating */}
        <div className="bg-yellow-400 text-black px-3 py-1 rounded-md text-sm font-bold shadow-md w-fit">
          {review.rating}/10
        </div>

        {/* Tombol */}
        <Link
          to={`/review/${review.id}`}
          className="block bg-blue-500 text-white px-4 py-2 rounded-lg transition-opacity hover:opacity-80 text-center"
        >
          Baca Selengkapnya
        </Link>
      </div>
    </div>
  );
};

export default ReviewCard;