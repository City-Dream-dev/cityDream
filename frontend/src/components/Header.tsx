import Link from 'next/link';
import Image from 'next/image';

import { Box } from '@mui/system';
import {
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography
} from '@mui/material';

import logo from '../assets/images/icons/logo.svg';

export const Header = () => {

  return (
    <Box height={54}>
      <AppBar elevation={0}>
        <Container>
          <Toolbar disableGutters sx={{ position: 'relative' }}>
            <Box display={'flex'} alignItems={'center'} flexGrow={1}>
              <Box>
                <Link href={'/#pro-nas'}>
                  <Typography
                    component={'a'}
                    color={'text.light'}
                    sx={{ cursor: 'pointer' }}
                  >
                    Про нас
                  </Typography>
                </Link>
              </Box>
              <Box marginX={3}>
                <Link href={'/#pro-nas'}>
                  <Typography
                    component={'a'}
                    color={'text.light'}
                    sx={{ cursor: 'pointer' }}
                  >
                    Проєкти
                  </Typography>
                </Link>
              </Box>
              <Button
                variant={'contained'}
              >
                Поділитися мрією
              </Button>
            </Box>

            <Box
              position={'absolute'}
              top={0}
              height={'100%'}
              display={'flex'}
              alignItems={'center'}
              left={'calc(50% - 100px)'}
            >
              <Link href={'/'}>
                <a style={{ display: 'block', lineHeight: 0 }}>
                  <Image
                    width={200}
                    height={26}
                    src={logo}
                    alt={'City dream logo'}
                  />
                </a>
              </Link>
            </Box>

            <Box display={'flex'} alignItems={'center'}>
              <Box mr={2}>
                <Button
                  variant={'outlined'}
                  color={'inherit'}
                  sx={{ borderColor: 'rgba(255, 255, 255, 0.5)' }}
                >
                  Log in
                </Button>
              </Box>
              <Box>
                <Button variant={'contained'}>Sign Up</Button>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
