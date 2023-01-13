import { useEffect, useState } from 'react';
import Seo from '../components/Seo';

const API_KEY = '33da22ec4e083dc59bb6f46242b9d2e6';

interface Movie {
  id: string;
  poster_path: string;
  original_title: string;
}

export default function Home(): React.ReactElement {
  const [movies, setMovies] = useState<Movie[]>();

  const getMovies = async () => {
    const { results } = await (
      await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
    ).json();

    setMovies(results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <div className="container">
        <Seo title="Home" />
        {!movies && <h4>Loading...</h4>}
        {movies?.map((movie) => {
          return (
            <div key={movie.id}>
              <div className="movie" key={movie.id}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                <h4>{movie.original_title}</h4>
              </div>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr; // ratio
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
