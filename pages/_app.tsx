import { AppProps } from 'next/app';
import Layout from '../components/Layout';

import '../styles/globals.css';

export const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
