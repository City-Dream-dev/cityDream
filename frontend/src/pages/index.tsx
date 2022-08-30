import type { NextPage } from 'next';
import { useSession, signOut } from 'next-auth/react';

import Head from 'next/head';
import Link from 'next/link';
import { Typography } from '@mui/material';
import { light } from '@mui/material/styles/createPalette';

const Home: NextPage = () => {
  const { data: session } = useSession();

  const showToken = () => {
    // Return user id and token
    console.log(session);
  };
  return (
    <div>
      <Head>
        <title>City dream</title>
        <meta name="description" content="City dream"/>
        <link rel="icon" href="/frontend/public/favicon.ico"/>
      </Head>

      <main style={{ textAlign: 'center', marginTop: 40 }}>
        <Typography variant={'h1'}>City dream</Typography>
        <div style={{ marginTop: 40 }}>
          {session ?
            <>
              <p>Signed in as {session?.user?.name}</p>
              <button onClick={showToken}>Show token in console</button>
              <button onClick={() => signOut()}>Sign out</button>
            </>
            :
            <>
              <p>Not signed in</p>
              <Link href="./auth/sign-in">
                <a>
                  Sign in
                </a>
              </Link>
            </>
          }
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
