import { Box, Container, Typography } from '@mui/material';
import { ProjectsList } from './ProjectsList';

import { PROJECTS_LIST_MOCK } from '@mocks/projects-list-mock';

export const DreamsInProgress = () => (
  <Box bgcolor={'background.paper'} component={'section'}>

    <Container>
      <Box py={'52px'}>
        <Box mb={4} textAlign={'center'}>
          <Typography component={'h2'} variant={'h2'}>
            Проекти, які чекають на втілення
          </Typography>
        </Box>
        <ProjectsList projects={PROJECTS_LIST_MOCK}/>
      </Box>
    </Container>
  </Box>
);
