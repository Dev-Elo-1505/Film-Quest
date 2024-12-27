import { useEffect, useState } from "react";
import axios from "axios";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

interface Movie {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
}

const Movie = () => {
  const [movieList, setMovieList] = useState<Movie[]>([]);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const BASE_URL = "https://api.themoviedb.org/3";

  const getMovie = async () => {
    try {
      const response = await axios.get<{ results: Movie[] }>(
        `${BASE_URL}/movie/popular`,
        {
          params: {
            api_key: API_KEY,
            language: "en-US",
            page: 1,
          },
        }
      );
      const movies = response.data.results;
      setMovieList(movies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

const slideLeft = () => {
  let slider = document.getElementById('slider');
  if(slider) slider.scrollLeft -= 500;
}
const slideRight = () => {
  let slider = document.getElementById('slider');
  if(slider) slider.scrollLeft += 500;
}

  return (
    <section className="p-5 lg:py-5 lg:px-20 bg-[#ffe]">
      <h2 className="mb-5 font-bold text-xl">Trending</h2>
      <div className="relative flex items-center">
        <MdChevronLeft className="cursor-pointer hover:opacity-100 opacity-50" onClick={slideLeft} size={40} />
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movieList.map((movie) => (
            <div
              key={movie.id}
              className="w-[220px] md:w-[250px] lg:w-[300px] rounded-md inline-block"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full object-cover rounded-md hover:scale-105 ease-in-out p-2 cursor-pointer"
              />
            </div>
          ))}
        </div>
        <MdChevronRight className="cursor-pointer hover:opacity-100 opacity-50" onClick={slideRight} size={40} />
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
