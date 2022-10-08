import { FC } from 'react';
import { Box, BoxTypeMap } from '@mui/system';
import { Typography, } from '@mui/material';

type StepProgressProps = {
  step: string;
  progress: number;
}

export const StepProgress: FC<StepProgressProps> = ({ step, progress }) => {
  const progressProps = {
    borderRadius: 10,
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
  } as unknown as BoxTypeMap;

  return (
    <Box>
      <Typography
        marginBottom={1}
        color={progress ? 'text.secondary' : 'text.disabled'}
      >
        {step}
      </Typography>
      <Box position={'relative'} height={6} width={'100%'}>
        <Box {...progressProps} width={'100%'} bgcolor={'grey.50'}/>
        <Box {...progressProps} width={`${progress}%`} bgcolor={'success.main'}/>
      </Box>
    </Box>
  );
};
