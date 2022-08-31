import type { NextPage } from 'next';
import Head from 'next/head';

import { Home } from '../components';

const App: NextPage = () => {

  return (
    <div>
      <Head>
        <title>City dream</title>
        <meta name="description" content="City dream"/>
        <link rel="icon" href="/frontend/public/favicon.ico"/>
      </Head>
      <Home/>
    </div>
  );
};

export default App;
