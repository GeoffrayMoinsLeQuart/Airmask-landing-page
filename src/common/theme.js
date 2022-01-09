import { createTheme } from '@mui/material';

const AirMaskWhite = '#FFFFFF';
const AirMaskBlack = '#201E29';
const AirMaskBlue = '#272ABF';

export default createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 2030,
    },
  },
  palette: {
    common: {
      white: AirMaskWhite,
      black: AirMaskBlack,
      blue: AirMaskBlue,
    },
    primary: {
      main: AirMaskWhite,
    },
    secondary: {
      main: AirMaskBlue,
      opacity60: 'rgba(39, 42, 191, 0.6)',
    },
    ternary: {
      main: AirMaskBlack,
      opacity3: 'rgba(255, 255, 255, 0.03)',
      opacity10: 'rgba(255, 255, 255, 0.1)',
      opacity60: 'rgba(255, 255, 255, 0.6)',
    },
  },
  typography: {
    fontFamily: ['"Segoe UI"', 'Helvetica Neue', 'Rubik'].join(','),
    h1: {
      fontFamily: ['Rubik', 'sans-serif'].join(','),
      color: AirMaskWhite,
      textTransform: 'none',
      fontWeight: 500,
      fontSize: '4rem',
      lineHeight: '6rem',
    },
    h2: {
      fontFamily: ['Rubik', 'sans-serif'].join(','),
      color: AirMaskWhite,
      textTransform: 'none',
      fontWeight: 500,
      fontSize: '2.25rem',
      lineHeight: '3.375rem',
    },
    h3: {
      fontFamily: ['Rubik', 'sans-serif'].join(','),
      color: AirMaskWhite,
      textTransform: 'none',
      fontWeight: 500,
      fontSize: '1.5rem',
      lineHeight: '2.25rem',
    },
    h4: {
      fontFamily: ['Rubik', 'sans-serif'].join(','),
      textTransform: 'none',
      fontWeight: 500,
      fontSize: '1.125rem',
      lineHeight: '1.6875rem',
      color: 'rgba(255, 255, 255, 0.6)',
    },
    h5: {
      fontFamily: ['Rubik', 'sans-serif'].join(','),
      color: AirMaskWhite,
      textTransform: 'none',
      fontWeight: 500,
      fontSize: '1.125rem',
      lineHeight: '1.6875rem',
    },
    overline: {
      fontFamily: `Segoe UI`,
      textTransform: 'none',
      fontWeight: 400,
      lineHeight: '1.6875rem',
      color: AirMaskWhite,
      fontSize: '1.125rem',
    },
    subtitle1: {
      fontFamily: `Montserrat`,
      textTransform: 'none',
      fontWeight: 400,
      lineHeight: '1.5rem',
      fontSize: '1rem',
      color: AirMaskWhite,
    },
  },
});
