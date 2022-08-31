import Image from 'next/image';

import { Box } from '@mui/system';
import {
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery
} from '@mui/material';

import { theme } from '../themes';

import heroImage from '../assets/images/cd-hero-image.png';

export const Home = () => {
  const lessLg = useMediaQuery(theme.breakpoints.down('lg'));
  const moreMd= useMediaQuery(theme.breakpoints.up('md'));

  const squareWidth = lessLg ? 24 : 32;
  const squareHeight = squareWidth * 1.5;

  const descriptionMaxWidth = moreMd ? 440 : 'initial'

  return (
    <Box bgcolor={'background.paper'}>
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
                  </>
                )}
                <Box></Box>
                <Box></Box>
                <Image objectFit={'contain'} src={heroImage}/>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};