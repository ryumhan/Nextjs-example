import Head from 'next/head';
import { ScriptProps } from 'next/script';

export default function Seo({ title }: ScriptProps): React.ReactElement {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}
