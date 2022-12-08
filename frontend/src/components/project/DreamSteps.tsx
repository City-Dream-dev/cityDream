import { Box } from '@mui/system';
import { Button, Grid, Stack, Typography } from '@mui/material';
import { Checkbox, CheckboxProps } from '@components';
import { FC } from 'react';
import { dreamStepsMock } from '@mocks/dream-steps-mock';

export const DreamSteps = () => {

  return (
    <Box>
      <Stack direction={'row'} spacing={2}>
        <Button variant={'contained'}>
          Етапи мрії
        </Button>
        <Button variant={'contained'} color={'info'}>
          Учасники
        </Button>
        <Button variant={'text'} color={'inherit'}>
          Коментарі та пропозмції
        </Button>
      </Stack>
      <Grid container columnSpacing={2} rowSpacing={5} mt={3}>
        {dreamStepsMock.map((step, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <DreamStep {...step}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export type DreamStepProps = {
  step: string;
  isActive: boolean;
  options: CheckboxProps[];
};

const DreamStep: FC<DreamStepProps> = ({ step, options }) => (
  <Box>
    <Typography variant={'h4'} component={'h4'}>{step}</Typography>
    <Stack spacing={2} mt={2}>
      {options.map(({ checkboxProps, labelProps }, index) => (
        <Box key={index}>
          <Checkbox
            labelProps={labelProps}
            checkboxProps={{ ...checkboxProps, color: 'primary' }}
          />
        </Box>
      ))}
    </Stack>
  </Box>
);
