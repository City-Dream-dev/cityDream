import { Box, Button, Container, Grid, useMediaQuery } from '@mui/material';
import { theme } from '@themes';
import { Gallery, Description, DreamSteps } from '.';
import { ProjectsList } from '@components';
import { useProjectsProvider } from '@context';

export const Project = () => {
  const { projects, project } = useProjectsProvider();
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


        {projects && (
          <Box component={'section'} mt={'84px'}>
            <ProjectsList projects={
              projects.filter(({ id }) => id !== project.id).slice(0, 4)
            }/>
          </Box>
        )}
      </Container>
    </Box>
  );
};