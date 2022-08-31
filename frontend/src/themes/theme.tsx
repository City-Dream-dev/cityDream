import { createTheme } from '@mui/material';
import { THEME_COLORS } from './theme-colors';

const {
  ALABASTER,
  BLACK,
  CONCRETE,
  DEEP_SEA_GREEN,
  DOVE_GRAY,
  GALLERY,
  PIZAZZ,
  JADE,
  WHITE
} = THEME_COLORS;


export const theme = createTheme({
  palette: {
    primary: {
      main: PIZAZZ
    },
    secondary: {
      main: DEEP_SEA_GREEN,
    },
    text: {
      primary: BLACK,
      light: WHITE
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
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        color: 'secondary',
        style: {
          minHeight: 54
        }
      },
    },
    MuiToolbar: {
      defaultProps: {
        style: {
          minHeight: 54
        }
      }
    },
    MuiButton: {
      defaultProps: {
        style: {
          borderRadius: 10,
          fontSize: '14px',
          fontWeight: 500,
          lineHeight: '24px',
          textTransform: 'none',
          boxShadow: 'none'
        }
      },
      styleOverrides: {
        sizeMedium: {
          padding: '4px 24px',
        },
        outlinedSizeMedium: {
          padding: '3px 24px',
        },
        containedPrimary: {
          color: WHITE
        },
      }
    }
  }
});
