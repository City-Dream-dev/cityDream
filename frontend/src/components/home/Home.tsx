import { FC } from 'react';

import {
  Box,
  Container,
  Typography,
  useMediaQuery,
} from '@mui/material';

import { theme } from '@themes';
import {
  Hero,
  DreamFlow,
  ProjectsList,
  ProjectCardProps,
} from '@components';

type HomeProps = {
  projects: ProjectCardProps[];
}

export const Home: FC<HomeProps> = ({ projects }) => {
  const lessLg = useMediaQuery(theme.breakpoints.down('lg'));
  const moreMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      <Hero lessLg={lessLg} moreMd={moreMd}/>
      <DreamFlow/>
      {projects && (
        <Box
          id="projects-in-progress"
          bgcolor={'background.paper'}
          component={'section'}
        >
          <Container>
            <Box pt={'52px'} pb={'102px'}>
              <Box mb={4} textAlign={'center'}>
                <Typography component={'h2'} variant={'h2'}>
                  Проекти, які чекають на втілення
                </Typography>
              </Box>
              <ProjectsList projects={projects}/>
            </Box>
          </Container>
        </Box>
      )}
    </>
  );
};
