import { FC } from 'react';
import { Button } from '@mui/material';

type ButtonShareDreamProps = {
  size?: 'medium' | 'large';
}

export const ButtonShareDream: FC<ButtonShareDreamProps> = (props) => (
  <Button
    {...props}
    component={'a'}
    variant={'contained'}
    target={'_blank'}
    href={'https://docs.google.com/forms/d/e/1FAIpQLSesQZSGOl8gVHIXVD8e0hmaC9FRW_kx-iOtKnxdU5Lplo3Pxg/viewform'}
  >
    Поділитися мрією
  </Button>
);
