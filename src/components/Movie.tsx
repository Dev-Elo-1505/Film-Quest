import { useEffect, useState } from "react";

interface Movie {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
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
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      
      {movieList.map((movie) => (
        <div key={movie.id}>
          <div className="w-[250px] h-[300px]">
            <img
              className="w-full h-full object-contain"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <div>
              <h3>{movie.title}</h3>
              <small>{movie.release_date}</small>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Movie;
