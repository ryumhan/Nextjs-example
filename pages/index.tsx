import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Seo from '../components/Seo';

interface Movie {
  id: string;
  poster_path: string;
  original_title: string;
}
interface IServerSideProps {
  movies: Movie[];
  error: boolean;
}

const Home = ({
  movies,
  error,
}: InferGetServerSidePropsType<GetServerSideProps<IServerSideProps>>): React.ReactElement => {
  return (
    <div>
      <div className="container">
        <Seo title="Home" />
        {error && <h4>Loading...</h4>}
        {movies?.map((movie: Movie) => {
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
};

export const getServerSideProps: GetServerSideProps<IServerSideProps> = async () => {
  const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();
  if (!results) {
    return {
      props: {
        movies: [],
        error: true,
      },
    };
  }

  return {
    props: {
      movies: results,
      error: false,
    },
  };
};

export default Home;
