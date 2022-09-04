import Link from 'next/link';

import { Box } from '@mui/system';
import { Button, Typography } from '@mui/material';

import { ButtonShareDream } from '../home/ButtonShareDream';

export const NavMenu = () => (
  <>
    <Box display={'flex'} alignItems={'center'} flexGrow={1}>
      <Box>
        <Link href={'/#pro-nas'} passHref>
          <Typography
            component={'a'}
            color={'text.light'}
            sx={{ textDecoration: 'none' }}
          >
            Про нас
          </Typography>
        </Link>
      </Box>
      <Box marginX={3}>
        <Link href={'/#projects-in-progress'} passHref>
          <Typography
            component={'a'}
            color={'text.light'}
            sx={{ textDecoration: 'none' }}
          >
            Проєкти
          </Typography>
        </Link>
      </Box>
      <ButtonShareDream/>
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
  </>
);