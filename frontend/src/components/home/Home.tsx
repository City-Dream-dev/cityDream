import {
  useMediaQuery
} from '@mui/material';

import { theme } from '@themes';

import { Hero, DreamFlow, DreamsInProgress } from '@components';

export const Home = () => {
  const lessLg = useMediaQuery(theme.breakpoints.down('lg'));
  const moreMd= useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      <Hero lessLg={lessLg} moreMd={moreMd}/>
      <DreamFlow />
      <DreamsInProgress/>
    </>
  );
};