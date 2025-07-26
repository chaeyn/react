import { useEffect, useState } from "react";
import type { MovieProps } from "../types/type";
import Movie from "../components/Movie";
import * as S from "./Home.style";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const res = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
    );
    const json = await res.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <S.Container>
      {loading ? (
        <S.Loader>Loading...</S.Loader>
      ) : (
        <S.Movies>
          {movies.map((movie: MovieProps) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </S.Movies>
      )}
    </S.Container>
  );
};

export default Home;
