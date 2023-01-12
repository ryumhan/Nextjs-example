import { useEffect, useState } from 'react';
import Seo from '../components/Seo';

const API_KEY = '33da22ec4e083dc59bb6f46242b9d2e6';

export default function Home(): React.ReactElement {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);

    const json = await response.json();
    setMovies(json);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <Seo title="Home" />
      <h1 className="active">Hello</h1>
    </div>
  );
}
