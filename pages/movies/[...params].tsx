import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import Seo from '../../components/Seo';

type Params = string[];

interface IServerSideProps {
  params: Params;
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

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const { params } = context;
  if (!params) {
    return {
      props: {
        params: [],
        error: true,
      },
    };
  }

  return {
    props: { params: params.params, error: false },
  };
};

export default Detail;
