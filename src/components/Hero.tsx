import { useEffect, useState } from "react";
import axios from "axios";

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

const Hero: React.FC = () => {
  const [movie, setMovie] = useState<Movie | null>(null);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const BASE_URL = "https://api.themoviedb.org/3";

  const fetchRandomMovie = async () => {
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

      if (movies.length > 0) {
        const randomIndex = Math.floor(Math.random() * movies.length);
        setMovie(movies[randomIndex]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRandomMovie();
  }, []);

  return (
    <div>
      {movie ? (
        <div
          className="relative w-full h-screen bg-cover bg-center"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
          }}
        >
          {/* Overlay */}
          {/* <div className="absolute inset-0 bg-[#027fb530] bg-opacity-10"></div> */}

          <div className="relative z-10 flex flex-col h-full p-5 text-center text-white space-y-4">
            <h1 className="text-4xl font-bold md:text-6xl">Welcome.</h1>
            <p className="text-sm md:text-lg max-w-2xl font-bold">
              Find your Next Favorite Film Instantly!
            </p>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <p className="text-white text-xl">Loading...</p>
        </div>
      )}
    </div>
  );
};

export default Hero;
