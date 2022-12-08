import Link from 'next/link';

import {
  Box,
  Stack,
  Container,
  Typography,
  Divider,
  useMediaQuery,
} from '@mui/material';

import { theme } from '@themes';

import { Image } from '..';

import iconFacebook from '@assets/icons/ic-facebook.svg';
import logoFounders from '@assets/images/logo-founders.png';

export const Footer = () => {
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
              fontWeight={'lighter'}
              fontSize={isLessMd ? '14px' : '17px'}
            >
              Цей веб-сайт був створений за підтримки Європейського Союзу в
              рамках Стипендіальної програми для лідерів громадянського
              суспільства країн Східного партнерства.<br/>Веб-сайт відображає
              позицію команди City Dream і не обов’язково відображає позицію
              Європейського Союзу.
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}/>

        <Box mt={2}>
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
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
            <Box>
              <Link href={'/terms-and-use'} passHref>
                <Typography
                  pr={2}
                  fontSize={12}
                  component={'a'}
                  color={'text.light'}
                  sx={{ textDecoration: 'none' }}
                >
                  Правила використання
                </Typography>
              </Link>
              <Divider
                orientation={'vertical'}
                sx={{
                  display: 'inline',
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                }}
              />
              <Link href={'/privacy-policy'} passHref>
                <Typography
                  pl={2}
                  fontSize={12}
                  component={'a'}
                  color={'text.light'}
                  display={'inline-block'}
                  sx={{ textDecoration: 'none' }}
                >
                  GDPR/Правила приватності
                </Typography>
              </Link>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
