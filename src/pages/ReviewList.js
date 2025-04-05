import reviews from "../reviews/dummyReviews";
import ReviewCard from "../components/ReviewCard";

const ReviewList = () => {
  return (
    <div className="container mx-auto p-6 text-white">
      <h1 className="text-4xl font-bold text-center mb-4">Review Final Fantasy</h1>
      <p className="text-lg text-center mb-6">
        Berikut adalah beberapa review dari game Final Fantasy yang pernah saya mainkan.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewList;