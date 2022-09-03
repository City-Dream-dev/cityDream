import { FC } from 'react';
import Image from 'next/image';

import { Box } from '@mui/system';
import { Button, Container, Grid, Typography } from '@mui/material';

import heroImage from '@assets/images/cd-hero-image.png';

type HomeHeroProps = {
  moreMd: boolean;
  lessLg: boolean;
};

export const Hero: FC<HomeHeroProps> = ({ moreMd, lessLg }) => {
  const descriptionMaxWidth = moreMd ? 440 : 'initial';
  const squareWidth = lessLg ? 24 : 32;
  const squareHeight = squareWidth * 1.5;

  return (
    <Box bgcolor={'background.paper'} component={'section'}>
      <Container>
        <Box pt={'90px'} pb={'64px'}>
          <Grid container columnSpacing={4}>
            <Grid item md={6}>
              <Box maxWidth={descriptionMaxWidth} mb={moreMd ? 0 : 8}>
                <Box mb={3}>
                  <Typography variant={'h1'} component={'h1'}>
                    City Dream - це толока <br/> для втілення мрій громади
                  </Typography>
                </Box>
                <Box mb={4}>
                  <Typography variant={'body1'}>
                    Ми створили цю платформу для ефективної комунікації між
                    бізнесом,
                    місцевою владою та жителями громади.
                  </Typography>
                </Box>
                <Box>
                  <Button variant={'contained'} size={'large'}>
                    Поділитися мрією
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item md={6}>
              <Box position={'relative'}>
                {moreMd && (
                  <>
                    {/* Orange boxes */}
                    <Box
                      bgcolor={'primary.main'}
                      width={squareWidth}
                      height={squareWidth}
                      position={'absolute'}
                      top={-squareHeight}
                      left={-squareHeight}
                    />
                    <Box
                      bgcolor={'primary.main'}
                      width={squareHeight}
                      height={squareWidth}
                      position={'absolute'}
                      top={-squareWidth}
                      left={0}
                    />
                    <Box
                      bgcolor={'primary.main'}
                      width={squareWidth}
                      height={squareHeight}
                      position={'absolute'}
                      top={0}
                      left={-squareWidth}
                    />
                    {/* END Orange boxes */}
                  </>
                )}
                <Image
                  src={heroImage}
                  objectFit={'cover'}
                  title={'Разом до втілення ідей'}
                  alt={'Команда складає руки перед девізом'}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};