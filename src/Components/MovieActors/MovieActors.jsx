import { useEffect, useState } from "react";
import { fetchMovieDetailsAuthors } from "../../service/fetch-api";
import { MovieActorsStyles } from "./MovieActorsStyles";

const MovieAuthorsPage = ({ filmsId, img, IMG_PLUG }) => {
  const [authors, setAuthors] = useState(null);
  useEffect(() => {
    fetchMovieDetailsAuthors(filmsId)
      .then(setAuthors)
      .catch((err) => console.log(err.message));
  }, [filmsId]);
  return (
    authors &&
    authors.cast?.map((author) => (
      <MovieActorsStyles key={author.cast_id}>
        {author.name}
        <p className="additional-information-list__text">
          Character: {author.character}
        </p>
        {author.profile_path ? (
          <img
            className="ImageGalleryItem-image"
            src={`${img}/${author.profile_path}`}
            alt=""
          />
        ) : (
          <img className="ImageGalleryItem-image" src={`${IMG_PLUG}`} alt="" />
        )}
      </MovieActorsStyles>
    ))
  );
};

export default MovieAuthorsPage;