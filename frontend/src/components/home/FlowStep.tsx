import { FC, ReactNode } from 'react';
import { StaticImageData } from 'next/image';

import { Box } from '@mui/system';

import { Image } from '..';

export type FlowStepProps = {
  src: StaticImageData;
  alt: string;
  title: string;
  children?: ReactNode;
}

export const FlowStep: FC<FlowStepProps> = ({ children, ...imageProps }) => (
  <Box textAlign={'center'}>
    <Box mx={'auto'} mb={3}>
      <Image width={140} height={146} objectFit={'cover'} {...imageProps} />
    </Box>
    <Box mx={'auto'} maxWidth={240}>
      {children}
    </Box>
  </Box>
);
