/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ScrollToELement, ScrollToELement2 } from '../../common/scroll-to-element';
import { Typography, Grid, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import howItWorksLogo from '../../assets/illustrations/how-it-works.svg'
import useMediaQuery from '@mui/material/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    position: 'relative',
    [theme.breakpoints.up('xl')]: { height: '48rem' },
    [theme.breakpoints.up('xxl')]: {
      paddingTop: '8.5rem',
      paddingBottom: '5.5rem',
      maxWidth: '125rem',
      margin: 'auto',
    },
    [theme.breakpoints.down('xl')]: {
      height: '68rem',
    },
    [theme.breakpoints.down('lg')]: {
      height: '61rem',
    },
    [theme.breakpoints.down('md')]: {
      height: '48rem',
    },
    [theme.breakpoints.down('sm')]: {
      height: '42rem',
    },
  },
  gridText: {
    [theme.breakpoints.up('md')]: {
      marginTop: '3rem',
    },
    [theme.breakpoints.up('xl')]: {
      zIndex: 1200,
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
      left: 140,
      top: -120,
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
          alignItems={{
            xs: 'center',
            sm: 'center',
            md: 'center',
            lg: 'center',
            xl: 'flex-start',
            xxl: 'flex-start',
          }}
          justifyContent={{
            xs: 'flex-start',
            sm: 'flex-start',
            md: 'flex-start',
            lg: 'flex-start',
            xl: 'flex-start',
            xxl: 'flex-start',
          }}
          className={classes.gridText}
        >
          <Grid item>
            <Typography
              variant={matchesBelowMD ? 'h2' : 'h1'}
              className={classes.elementGridTitle}
            >
              Get airdrops at the speed of light
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h4" className={classes.elementGridSubtitle}>
              The first version of AirMask is ready to use. Start to earning
              tokens right now. Come and get it!
            </Typography>
          </Grid>
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
