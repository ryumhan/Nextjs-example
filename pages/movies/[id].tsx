import { useRouter } from 'next/router';

const Detail = (): React.ReactElement => {
  const router = useRouter();

  return (
    <div>
      <h4>{router.query.title || 'Loading...'}</h4>
    </div>
  );
};

export default Detail;
