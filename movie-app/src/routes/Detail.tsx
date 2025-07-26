import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";
import type { MovieProps } from "../types/type";
import * as S from "./Detail.style";

const Detail = () => {
  const { paramId } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState<MovieProps | undefined>(undefined);

  const getMovie = async () => {
    const res = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${paramId}`
    );
    const json = await res.json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <S.Container>
      {loading ? (
        <S.Loader>Loading...</S.Loader>
      ) : movie ? (
        <Movie
          key={movie.id}
          id={movie.id}
          coverImg={movie.medium_cover_image}
          title={movie.title}
          summary={movie.description_full}
          genres={movie.genres}
        />
      ) : (
        <h1>Movie not found.</h1>
      )}
    </S.Container>
  );
};

export default Detail;
