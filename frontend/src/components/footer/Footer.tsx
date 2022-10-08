import Image from 'next/image';
import {
  Box,
  Container,
  Typography,
  Divider,
  useMediaQuery,
} from '@mui/material';

import { theme } from '@themes';

import iconFacebook from '@assets/icons/ic-facebook.svg';
import logoFounders from '@assets/images/logo-founders.png';

export const Footer = () => {
  const isLessLg = useMediaQuery(theme.breakpoints.down('lg'));
  const isLessMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      py={3}
      component={'footer'}
      bgcolor={'secondary.main'}
      textAlign={isLessMd ? 'center' : 'left'}
    >
      <Container>
        <Box
          mb={5}
          display={'flex'}
          alignItems={'center'}
          flexDirection={isLessMd ? 'column' : 'row'}
        >
          <Box
            flexShrink={0}
            sx={{ margin: isLessMd ? '0 0 16px' : '0 16px 0 0' }}
          >
            <Image
              width={288}
              height={100}
              objectFit={'cover'}
              src={logoFounders}
              alt={'Logo European union'}
            />
          </Box>
          <Box>
            <Typography
              color={'text.light'}
              fontSize={isLessLg ? '14px' : '17px'}
            >
              Цей сайт створено за підтримки Європейського Союзу у межах проєкту
              “Інтерналізація Українського кластерного альянсу: покращення
              прямого діалогу між європейськими та українськими професійними
              спільнотами під час війни”. Вебсайт відображає позицію УКА і не
              обов’язково відображає позицію Європейського Союзу.
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}/>

        <Box mt={2}>
          <a
            rel={'noreferrer'}
            target={'_blank'}
            href={'https://www.facebook.com/citydream.pp.ua/'}
          >
            <Image
              width={50}
              height={50}
              src={iconFacebook}
              alt={'Icon facebook'}
            />
          </a>
        </Box>
      </Container>
    </Box>
  );
};