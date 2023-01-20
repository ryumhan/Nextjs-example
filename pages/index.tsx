import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
  const router = useRouter();

  const handleClick = (id: string, title: string) => {
    router.push(
      {
        pathname: `/movies/${id}`,
        query: {
          title,
        },
      },
      `/movies/${id}`,
    );
  };

  return (
    <div>
      <div className="container">
        <Seo title="Home" />
        {error && <h4>Loading...</h4>}
        {movies?.map((movie: Movie) => {
          return (
            <div key={movie.id}>
              <div
                className="movie"
                key={movie.id}
                onClick={() => {
                  handleClick(movie.id, movie.original_title);
                }}
              >
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                <h4>
                  <Link
                    href={{
                      pathname: `/movies/${movie.id}`,
                      query: {
                        title: movie.original_title,
                      },
                    }}
                    as={`/movies/${movie.id}`}
                  >
                    {movie.original_title}
                  </Link>
                </h4>
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
        .movie {
          cursor: pointer;
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
