import { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';

import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { Provider } from 'next-auth/providers';
import { getProviders, signIn, useSession } from 'next-auth/react';


const SignIn: NextPage<{ providers: Provider[] }> = ({ providers }) => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push('/');
    }
  }, [session]);

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
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button onClick={() => signIn(provider.id)}>
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
        <Link href="/">
          <a>
            Back to home
          </a>
        </Link>
      </main>

      <footer></footer>
    </div>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default SignIn;