import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Box } from '@mui/system';
import { Avatar, Button, Typography } from '@mui/material';
import { signOut, useSession } from 'next-auth/react';

import { ButtonShareDream, Image } from '..';

interface User {
  email: string;
  image: string;
  name: string;
}

export const NavMenu = () => {
  const { data: session } = useSession();
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    if (session) {
      setUser(session?.user as User)
    } else {
      setUser(null)
    }
  }, [session])

  return (
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
      <Box>
        {session ? (
            <Box display={'flex'} alignItems={'center'}>
              <Box marginRight={2}>
                <Button
                  variant={'outlined'}
                  color={'inherit'}
                  onClick={() => signOut()}
                  sx={{ borderColor: 'rgba(255, 255, 255, 0.5)' }}
                >
                  Logout
                </Button>
              </Box>
              <Avatar title={user?.name}>
                {user?.image
                  ? (
                    <Image
                      src={user?.image}
                      width={40}
                      height={40}
                      alt={'User avatar icon'}
                    />
                  )
                  : user?.name.split((' ')).map(str => str[0].toUpperCase())}
              </Avatar>
            </Box>
        ): (
          <Link href={'/auth/sign-in'}>
            <Button
              component={'a'}
              variant={'outlined'}
              color={'inherit'}
              sx={{ borderColor: 'rgba(255, 255, 255, 0.5)' }}
            >
              Login with Facebook
            </Button>
          </Link>
        )}
      </Box>
    </>
  );
}
