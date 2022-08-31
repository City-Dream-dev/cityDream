import { Box,  } from '@mui/system';
import Link from 'next/link';
import { Button, Typography, Stack } from '@mui/material';

export const HeaderDrawerMenu = () => (
  <Box p={4} textAlign={'center'} height={'100%'}>
    <Stack spacing={4} height={'100%'}>
      <Link href={'/#pro-nas'}>
        <Typography
          component={'a'}
          color={'text.light'}
          sx={{ cursor: 'pointer' }}
        >
          Про нас
        </Typography>
      </Link>
      <Link href={'/#pro-nas'}>
        <Typography
          component={'a'}
          color={'text.light'}
          sx={{ cursor: 'pointer' }}
        >
          Проєкти
        </Typography>
      </Link>
      <Button
        variant={'contained'}
      >
        Поділитися мрією
      </Button>

      <Stack spacing={4} justifyContent={'flex-end'} flexGrow={1}>
        <Box>
          <Button variant={'contained'}>Sign Up</Button>
        </Box>
        <Box>
          <Button
            variant={'outlined'}
            color={'inherit'}
            sx={{ borderColor: 'rgba(255, 255, 255, 0.5)' }}
          >
            Log in
          </Button>
        </Box>
      </Stack>
    </Stack>
  </Box>
);