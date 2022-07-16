import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';


const SingIn: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sing in | City dream</title>
        <meta name="description" content="Sing in | City dream"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main style={{ textAlign: 'center', marginTop: 40 }}>
        <h1>Sing in</h1>
        <div style={{ width: '100%' }}></div>
        <div style={{ maxWidth: 500, padding: 40, marginLeft: 'auto', marginRight: 'auto' }}>
          <input type="text"/>
        </div>
        <Link href="./">
          <a>
            Back to home
          </a>
        </Link>
      </main>

      <footer></footer>
    </div>
  )
};

export default SingIn;