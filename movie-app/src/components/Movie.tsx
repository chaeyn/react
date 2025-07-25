import { Link } from "react-router-dom";
import type { MovieProps } from "../types/type";

function Movie({ id, coverImg, title, summary, genres }: MovieProps) {
  return (
    <div>
      <div>
        <img src={coverImg} alt={title} />
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p>{summary}</p>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Movie;
