import { Link } from "react-router-dom";
import type { MovieProps } from "../types/type";
import * as S from "./Movie.style";

function Movie({
  id,
  coverImg,
  title,
  summary = "",
  description_full = "",
  genres = [],
}: MovieProps) {
  const displaySummary = summary || description_full;
  return (
    <S.MovieContainer>
      <S.MovieImg src={coverImg} alt={title} />
      <S.MovieInfo>
        <S.MovieTitle>
          <Link to={`/movie/${id}`}>{title}</Link>
        </S.MovieTitle>
        <p>
          {displaySummary.length > 235
            ? `${displaySummary.slice(0, 235)}...`
            : displaySummary}
        </p>
        <S.MovieGenres>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </S.MovieGenres>
      </S.MovieInfo>
    </S.MovieContainer>
  );
}

export default Movie;
