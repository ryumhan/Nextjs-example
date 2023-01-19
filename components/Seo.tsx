import Head from 'next/head';
import { ScriptProps } from 'next/script';

export const Seo = ({ title }: ScriptProps): React.ReactElement => {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
};

export default Seo;
