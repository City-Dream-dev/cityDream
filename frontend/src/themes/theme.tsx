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
    background: {
      paper: ALABASTER
    }
  },
  typography: {
    fontFamily: "Roboto",
    h1: {
      fontWeight: 700,
      fontSize: '36px',
      lineHeight: '46px',
      letterSpacing: '-1px'
    },
    h2: {
      fontWeight: 700,
      fontSize: '33px',
      lineHeight: '48px',
      letterSpacing: '0.1px'
    },
    body1: {
      fontSize: 16,
      lineHeight: '22px'
    },
    body2: {
      fontSize: 14,
      lineHeight: '20px'
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
        sizeLarge: {
          fontSize: '16px !important',
          padding: '12px 30px'
        },
        outlinedSizeMedium: {
          padding: '3px 24px',
        },
        containedPrimary: {
          color: WHITE
        },
      }
    },
    MuiTypography: {
      defaultProps: {
        variant: 'body2'
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          color: WHITE,
          backgroundColor: DEEP_SEA_GREEN
        }
      }
    }
  }
});
