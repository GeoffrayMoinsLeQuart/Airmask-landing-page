/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ScrollToELement, ScrollToELement2 } from '../common/scroll-to-element';
import StyledButtonWithIcon from '../common/button-with-icon';
import { Typography, Grid, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import howItWorksLogo from '../assets/illustrations/how-it-works.svg'
import useMediaQuery from '@mui/material/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    [theme.breakpoints.up('xl')]: { height: '46.25rem' },
    [theme.breakpoints.down('xl')]: { height: '75rem' },
    [theme.breakpoints.down('lg')]: {
      height: '69rem',
    },
    [theme.breakpoints.down('md')]: {
      height: '50rem',
    },
    [theme.breakpoints.down('sm')]: {
      height: '45rem',
    },
  },
  gridText: {
    [theme.breakpoints.up('md')]: {
      marginTop: '3rem',
    },
    [theme.breakpoints.up('xl')]: {
      zIndex: 12,
    },
  },
  gridImage: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: '25rem',
      maxHeight: '25rem',
    },
    [theme.breakpoints.up('sm')]: {
      width: '30rem',
      height: '30rem',
    },
    [theme.breakpoints.up('md')]: {
      width: '40rem',
      height: '40rem',
    },
    [theme.breakpoints.up('lg')]: {},
    [theme.breakpoints.up('xl')]: {
      marginTop: '12.4375rem',
      paddingRight: '8.75rem',
      zIndex: 1,
      position: 'absolute',
      left: '0px',
      top: '0px',
    },
  },
  image: {
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '3rem',
      width: '100%',
      height: '100%',
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: '4rem',
    },
    [theme.breakpoints.up('md')]: {
      width: '40rem',
      height: '40rem',
    },
    [theme.breakpoints.up('lg')]: {
      minWidth: '53.75rem',
    },
  },
  elementGridTitle: {
    paddingTop: '1rem',
    paddingBottom: '1rem',
  },
  elementGridSubtitle: {
    paddingBottom: '2rem',
  },
}));

const Intro = ({ value }) => {
  const myRef = React.createRef();
  const offsetCalcul = ScrollToELement();
  const classes = useStyles();
  const theme = useTheme();
  const matchesUpLG = useMediaQuery(theme.breakpoints.up('lg'));
  const matchesBelowMD = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    if (value === 'Home') {
      ScrollToELement2(myRef.current.offsetTop - offsetCalcul);
    }
  }, [value]);
  return (
      <Grid
        ref={myRef}
        container
        direction={{
          xs: 'column',
          sm: 'column',
          md: 'column',
          lg: 'row',
          xl: 'row',
        }}
        justifyContent="flex-start"
        className={classes.gridContainer}
      >
        <Grid item lg={12} xl={6} xxl={7}>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems={{
              xs: 'center',
              sm: 'center',
              md: 'center',
              lg: 'center',
              xl: 'flex-start',
            }}
            className={classes.gridText}
          >
            {matchesUpLG && (
              <StyledButtonWithIcon>
                Never miss an opportunity! 😎
              </StyledButtonWithIcon>
            )}
            <Typography
              variant={matchesBelowMD ? 'h2' : 'h1'}
              className={classes.elementGridTitle}
            >
              Get airdrops at the speed of light
            </Typography>
            <Typography variant="h4" className={classes.elementGridSubtitle}>
              The first version of AirMask is ready to use. Start to earning
              tokens right now. Come and get it!
            </Typography>
            <StyledButtonWithIcon>Download now</StyledButtonWithIcon>
          </Grid>
        </Grid>
        <Grid item lg={12} xl={6} xxl={5}>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems={{
              xs: 'center',
              sm: 'center',
              md: 'center',
              lg: 'center',
              xl: 'flex-end',
            }}
            className={classes.gridImage}
          >
            <img
              alt="howItWorksLogo"
              src={howItWorksLogo}
              className={classes.image}
            />
          </Grid>
        </Grid>
      </Grid>
  );
};

export default Intro;
