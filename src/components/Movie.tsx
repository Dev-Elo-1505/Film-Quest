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
    <section className="p-5 lg:py-5 lg:px-20 bg-[#ffe]">
      <h2 className="mb-5 font-bold text-xl">Movies</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center gap-4">
        {movieList.map((movie) => (
          <div key={movie.id} className="w-[140px] md:w-[200px] lg:w-[250px] rounded">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full object-cover rounded"
            />
          </div>
        ))}
      </div>
    </section>
    // <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 place-items-center">

    //   {movieList.map((movie) => (
    //     <div key={movie.id}>
    //       <div className="w-[100px] h-[100px]">
    //         <img
    //           className="w-full h-full object-cover"
    //           src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
    //           alt={movie.title}
    //         />

    //       </div>
    //       <div>
    //           <h3>{movie.title}</h3>
    //           <small>{movie.release_date}</small>
    //         </div>
    //     </div>
    //   ))}
    // </section>
  );
};

export default Movie;
