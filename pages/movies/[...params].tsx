import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Seo from '../../components/Seo';

interface IServerSideProps {
  params: string[];
  error: boolean;
}

const Detail = ({
  params,
}: InferGetServerSidePropsType<GetServerSideProps<IServerSideProps>>): React.ReactElement => {
  const [title, id] = params || [];

  return (
    <div>
      <Seo title={title} />
      <h4>{title + id || 'Loading...'}</h4>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<IServerSideProps> = async (params: {
  params: string[];
}) => {
  if (!params) {
    return {
      props: {
        params: [],
        error: true,
      },
    };
  }

  return {
    props: { params, error: false },
  };
};

export default Detail;
