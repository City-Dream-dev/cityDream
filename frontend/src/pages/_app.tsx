import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

import { ThemeProvider } from '@mui/system';
import { theme } from '../themes';


function App({ Component, pageProps: { session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}

export default App;
