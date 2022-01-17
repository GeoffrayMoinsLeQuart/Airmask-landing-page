import {
  useTheme,
  useMediaQuery,
} from '@mui/material';

export default function useIsMobile(page) {
  const theme = useTheme();
  const isXSScreen = useMediaQuery(theme.breakpoints.up('xs'));
  const isSMScreen = useMediaQuery(theme.breakpoints.up('sm'));
  const isMDScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isLGScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isXLGScreen = useMediaQuery(theme.breakpoints.up('xl'));
  const isXXLGScreen = useMediaQuery(theme.breakpoints.up('xxl'));

  if (page === 'number') {
    if (isXSScreen && !isSMScreen) {
      return -100;
    } else if (isSMScreen && !isMDScreen) {
      return 50;
    } else if (isMDScreen && !isLGScreen) {
      return 50;
    } else if (isLGScreen && !isXLGScreen) {
      return 40;
    } else if (isXLGScreen && !isXXLGScreen) {
      return 60;
    } else if (isXXLGScreen) {
      return 60;
    }
  } else if (page === 'start') {
    if (isXSScreen && !isSMScreen) {
      return 80;
    } else if (isSMScreen && !isMDScreen) {
      return 70;
    } else if (isMDScreen && !isLGScreen) {
      return 60;
    } else if (isLGScreen && !isXLGScreen) {
      return 60;
    } else if (isXLGScreen && !isXXLGScreen) {
      return 60;
    } else if (isXXLGScreen) {
      return 90;
    }
  } else if (page === 'faq') {
    if (isXSScreen && !isSMScreen) {
      return -400;
    } else if (isSMScreen && !isMDScreen) {
      return -350;
    } else if (isMDScreen && !isLGScreen) {
      return -400;
    } else if (isLGScreen && !isXLGScreen) {
      return -400;
    } else if (isXLGScreen && !isXXLGScreen) {
      return -400;
    } else if (isXXLGScreen) {
      return -400;
    }
  }
}
