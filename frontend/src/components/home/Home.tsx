import {
  useMediaQuery
} from '@mui/material';

import { theme } from '@themes';

import { Hero, DreamFlow } from '../index';

export const Home = () => {
  const lessLg = useMediaQuery(theme.breakpoints.down('lg'));
  const moreMd= useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      <Hero lessLg={lessLg} moreMd={moreMd}/>
      <DreamFlow />
    </>
  );
};