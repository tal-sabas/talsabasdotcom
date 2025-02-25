'use client';

import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3d3e42',
    },
    secondary: {
      main: '#efbf6b'
    },
    background: {
      default: '#3d3e42',
    },
  },
  typography: {
    fontFamily: 'Poppins'
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ededed'
    },
    background: {
      default: '#ededed'
    }
  },
  typography: {
    fontFamily: 'Poppins'
  }
});