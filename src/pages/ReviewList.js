import {Link} from "react-router-dom";
import reviews from "../reviews/dummyReviews";
import ReviewCard from "../components/ReviewCard";

const ReviewList = () => {
  return (
    <div className="container mx-auto p-4 text-white">
      <h1 className="font-title text-2xl font-bold mb-4">📢 Review Final Fantasy</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewList;