import { useRouter } from 'next/router';

const Detail = (): React.ReactElement => {
  const router = useRouter();
  console.log(router);
  return <div>Detail</div>;
};

export default Detail;
