import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>City dream</title>
        <meta name="description" content="City dream"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main style={{ textAlign: 'center', marginTop: 40 }}>
        <h1>City dream</h1>
        <Link href="./sing-in">
          <a>Sign in</a>
        </Link>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
