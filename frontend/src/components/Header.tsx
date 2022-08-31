import { useState } from 'react';

import {
  Box,
  AppBar,
  Container,
  Drawer,
  IconButton,
  Toolbar,
  useMediaQuery
} from '@mui/material';

import { theme } from '../themes';
import { Menu } from '@mui/icons-material';
import { HeaderNavMenu, HeaderLogo, HeaderDrawerMenu } from '.';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const lessMd = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <Box height={54}>
      <AppBar elevation={0}>
        <Container>
          <Toolbar disableGutters sx={{ position: 'relative' }}>
            {lessMd ? (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleDrawer}
              >
                <Menu/>
              </IconButton>
            ) : <HeaderNavMenu/>}
            <HeaderLogo/>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer open={isOpen} onClose={toggleDrawer}>
        <HeaderDrawerMenu/>
      </Drawer>
    </Box>
  );
};
