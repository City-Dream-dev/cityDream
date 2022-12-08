import { FC, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';

export type ProjectCardProps = {
  id: string;
  src: string | StaticImageData;
  alt: string;
  title: string;
  authorAvatar: string;
  authorFirstName: string;
  authorLastName: string;
  description: string;
}

export const ProjectCard: FC<ProjectCardProps> = (
  {
    id,
    src,
    alt,
    title,
    authorLastName,
    authorFirstName,
    description
  }
) => {
  const [elevation, setElevation] = useState(1);

  const onMouseOver = () => {
    setElevation(5);
  };

  const onMouseLeave = () => {
    setElevation(1);
  };

  return (
    <Link href={`/project/${id}`}>
      <Card
        elevation={elevation}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        aria-labelledby={'project-card'}
        sx={{ cursor: 'pointer', height: '100%' }}
      >
        <CardMedia sx={{
          '& > span': {
            width: '101% !important',
            maxWidth: '101% !important'
          }
        }}
        >
          <Image objectFit={'cover'} width={300} height={200} src={src} alt={alt}/>
        </CardMedia>
        <CardContent>
          <Box>
            <Typography
              mb={1}
              component={'h3'}
              variant={'h4'}
              height={40}
              display={'-webkit-box'}
              overflow={'hidden'}
              sx={{
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: '2 !important'
              }}
            >
              {title}
            </Typography>
            <Box mb={'10px'}>
              <Typography
                variant={'caption'}
                color={'text.subInfo'}
              >
                {authorFirstName} {authorLastName}
              </Typography>
            </Box>

            <Typography
              color={'text.secondary'}
              display={'-webkit-box'}
              overflow={'hidden'}
              sx={{
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: '6 !important'
              }}
            >
              {description}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
};
