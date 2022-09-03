import * as createPalette from '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  export interface TypeText {
    primary: string;
    secondary: string;
    subInfo: string;
    disabled: string;
    light: string;
  }
}