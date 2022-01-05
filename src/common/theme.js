import { createTheme } from '@mui/material';

const AirMaskWhite = '#FFFFFF';
const AirMaskBlack = '#201E29';
const AirMaskBlue = '#272ABF';

export default createTheme({
  palette: {
    common: {
      white: `${AirMaskWhite}`,
      black: `${AirMaskBlack}`,
      blue: `${AirMaskBlue}`,
    },
    primary: {
      main: `${AirMaskWhite}`,
    },
    secondary: {
      main: `${AirMaskBlue}`,
    },
    ternary: {
      main: `${AirMaskBlack}`,
      opacity10: `${AirMaskBlack + 10}`,
    },
  },
  typography: {
    fontFamily: ['"Segoe UI"', 'Helvetica Neue'].join(','),
    overline: {
      textTransform: 'none',
      fontWeight: 400,
      lineHeight: '1.6875rem',
      fontFamily: `Segoe UI`,
      color: `${AirMaskWhite}`,
      fontSize: '1.125rem',
    },
    subtitle1: {
      textTransform: 'none',
      fontWeight: 400,
      lineHeight: '1.5rem',
      fontFamily: `Montserrat`,
      color: `${AirMaskWhite}`,
      fontSize: '1rem',
    },
  },
});