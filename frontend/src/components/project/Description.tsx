import Image from 'next/image';

import { Avatar, Box, Stack, Typography } from '@mui/material';

import { StepProgress } from '.';

import { useProjectsProvider } from '@context';

export const Description = () => {
  const { project: {
    title,
    description,
    authorAvatar,
    authorLastName,
    authorFirstName
  } } = useProjectsProvider();

  return (
    <Box>
      <Typography component={'h1'} variant={'h3'}>
        {title}
      </Typography>
      <Box display={'flex'} alignItems={'center'} my={3}>
        <Box mr={2}>
          <Avatar>
            {authorAvatar
              ? (
                <Image
                  src={authorAvatar}
                  width={40}
                  height={40}
                  alt={'User avatar icon'}
                />
              )
              : authorFirstName[0] + authorLastName[0]}
          </Avatar>
        </Box>
        <Typography variant={'caption'} color={'text.subInfo'}>
          {authorFirstName} {authorLastName}
        </Typography>
      </Box>
      <Box my={3} overflow={'hidden'}>
        <Typography color={'text.secondary'} fontWeight={'fontWeightLight'}>
          {description}
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
