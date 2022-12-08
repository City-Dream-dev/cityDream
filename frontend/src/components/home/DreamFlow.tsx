import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

import { DreamFlowSteps } from './DreamFlowSteps';

export const DreamFlow = () => {

  return (
    <Container component={'section'}>
      <Box py={'52px'}>
        <Box textAlign={'center'} mb={6}>
          <Typography variant={'h2'} component={'h2'} mb={0.5}>
            Шлях до мрії. Як це працює?
          </Typography>
          <Typography>
            Нижче описаний процес: від ідеї до поширення результатів кампанії
          </Typography>
        </Box>
        <DreamFlowSteps/>
      </Box>
    </Container>
  )
};