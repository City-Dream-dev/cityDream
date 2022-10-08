import { Box, Button, Container, Grid, useMediaQuery } from '@mui/material';

import { Gallery } from './Gallery';
import { Description } from './Description';
import { DreamSteps } from './DreamSteps';
import { theme } from '@themes';
import { ProjectsList } from '@components';
import { PROJECTS_LIST_MOCK } from '@mocks/projects-list-mock';

export const Project = () => {
  const isLessLg = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Box bgcolor={'background.paper'} pt={'52px'} pb={'68px'}>
      <Container>
        <Box mb={'50px'}>
          <Grid container columnSpacing={isLessLg ? 4 : '96px'} rowSpacing={4}>
            <Grid xs={12} md={7} item>
              <Gallery lessLg={isLessLg}/>
            </Grid>
            <Grid item xs={12} md={5}>
              <Description/>
              <Box mt={'58px'}>
                <Button variant={'contained'} size={'large'}>
                  Підтримати мріяю
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <DreamSteps/>
        </Box>

        <Box component={'section'} mt={'84px'}>
          <ProjectsList projects={PROJECTS_LIST_MOCK.slice(0, 4)}/>
        </Box>

      </Container>
    </Box>
  );
};