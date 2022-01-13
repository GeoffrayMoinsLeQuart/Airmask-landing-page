/* eslint-disable react-hooks/exhaustive-deps */
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material';

export const ScrollToELement = () => {
    const theme = useTheme();
    const isXSScreen = useMediaQuery(theme.breakpoints.up('xs'));
    const isMDScreen = useMediaQuery(theme.breakpoints.up('md'));
    const isLGScreen = useMediaQuery(theme.breakpoints.up('lg'));
    const isSMScreen = useMediaQuery(theme.breakpoints.up('sm'));
      if (isLGScreen) {
        return 170;
      } else if (isMDScreen) {
        return 150;
      } else if (isSMScreen) {
        return 120;
      } else if (isXSScreen) {
        return 120;
      }
};

export const ScrollToELement2 = (result) => {
  window.scrollTo({
    top: result,
    behavior: 'smooth', // optional
  });
};
