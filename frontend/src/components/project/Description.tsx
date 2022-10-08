import Image from 'next/image';

import { Avatar, Box, Stack, Typography } from '@mui/material';

import { StepProgress } from '.';

import avatar from '@mocks//images/avatar-mock.jpeg';

export const Description = () => {
  return (
    <Box>
      <Typography component={'h1'} variant={'h3'}>
        Туристичний знак на в'їзді до Черкаської області
      </Typography>
      <Box display={'flex'} alignItems={'center'} my={3}>
        <Box mr={2}>
          <Avatar>
            {avatar ? <Image src={avatar} alt={'User avatar icon'}/> : 'КА'}
          </Avatar>
        </Box>
        <Typography variant={'caption'} color={'text.subInfo'}>
          Крутий автор
        </Typography>
      </Box>
      <Box my={3}>
        <Typography color={'text.secondary'} fontWeight={'fontWeightLight'}>
          У рамках просування нового бренду Черкащини "місце сили" ми хочемо залучити місцевий бізнес, щоб встановити цей крутий знак – майбутню інста-локацію.
        </Typography>
      </Box>
      <Stack spacing={2}>
        <StepProgress step={'1 Етап'} progress={100}/>
        <StepProgress step={'2 Етап'} progress={70}/>
        <StepProgress step={'3 Етап'} progress={0}/>
      </Stack>
    </Box>
  );
};
