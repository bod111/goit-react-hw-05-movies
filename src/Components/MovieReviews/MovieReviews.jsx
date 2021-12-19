import { useEffect, useState } from "react";
import { fetchMovieDetailsReviews } from "../../service/fetch-api";
import { MovieReviewsStyles } from "./MovieReviewsStyles";
const MovieReviewsPage = ({ filmsId }) => {
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    fetchMovieDetailsReviews(filmsId)
      .then(setReviews)
      .catch((err) => console.log(err.message));
  }, [filmsId]);
  if (reviews?.results?.length) {
    return reviews?.results?.map((review) => (
      <MovieReviewsStyles key={review.id}>
        Author: {review.author}
        <p className="revievs__text">{review.content}</p>
      </MovieReviewsStyles>
    ));
  }
  return (
    <li>
      <p>We dont have any reviews for this movies.</p>
    </li>
  );
};

export default MovieReviewsPage;