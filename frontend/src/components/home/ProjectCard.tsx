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
  href: string;
  src: StaticImageData;
  alt: string;
  title: string;
  author: string;
  description: string;
}

export const ProjectCard: FC<ProjectCardProps> = (
  {
    href,
    src,
    alt,
    title,
    author,
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
    <Link href={href || ''}>
      <Card
        elevation={elevation}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        aria-labelledby={'project-card'}
        sx={{ cursor: 'pointer' }}
      >
        <CardMedia sx={{
          '& > span': {
            width: '101% !important',
            maxWidth: '101% !important'
          }
        }}
        >
          <Image objectFit={'cover'} src={src} alt={alt}/>
        </CardMedia>
        <CardContent>
          <Box>
            <Typography
              mb={1}
              component={'h3'}
              variant={'h4'}>
              {title}
            </Typography>
            <Box mb={'10px'}>
              <Typography
                variant={'caption'}
                color={'text.subInfo'}
              >
                {author}
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
