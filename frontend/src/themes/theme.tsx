import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    text: {
      primary: '#000',
      light: '#fff'
    },
  },
  typography: {
    fontFamily: "Roboto",
    h1: {
      fontWeight: 700,
      fontSize: '36px',
      lineHeight: '46px',
      letterSpacing: '-1px'
    }
  }
});
