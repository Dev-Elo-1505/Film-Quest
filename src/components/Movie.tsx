import { useEffect, useState } from "react";

interface Movie {
  id: number;
  poster_path: string;
  title: string;
}

const Movie = () => {
  const [movieList, setMovieList] = useState<Movie[]>([]);

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=3738a700f9af0026bef09d31d0c2b2a5"
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  useEffect(() => {
    getMovie();
  }, []);
  console.log(movieList);
  return (
    <section>
      {movieList.map((movie) => (
        <div key={movie.id} className="flex">
          <div className="w-[250px] h-[300px]">
            <img
            className="w-full h-full object-cover"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Movie;
