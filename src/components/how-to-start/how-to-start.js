/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ScrollToELement, ScrollToELement2 } from '../../common/scroll-to-element';
import { Typography, Grid, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from '@mui/styles';
import GridHowToStart from './grid-how-to-start';
import useIsMobile from '../../common/get-size-screen';
import Lottie from 'react-lottie';
import animationData from '../../assets/animation/how-to-start.json';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    maxWidth: '125rem',
    margin: 'auto',
    [theme.breakpoints.down('md')]: {
      paddingTop: '4.5rem',
      paddingBottom: '4.5rem',
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: '4.5rem',
      paddingBottom: '4.5rem',
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: '5.5rem',
      paddingBottom: '4.5rem',
    },
    [theme.breakpoints.up('xl')]: {
      paddingTop: '6.5rem',
      paddingBottom: '4.5rem',
    },
    [theme.breakpoints.up('xxl')]: {
      paddingTop: '8.5rem',
      paddingBottom: '4.5rem',
    },
  },
  image: {
    paddingBottom: '1.5rem',
    marginLeft: 'auto',
    [theme.breakpoints.down('md')]: {
      margin: 'auto',
      paddingTop: '3rem',
    },
    [theme.breakpoints.up('xs')]: {
      maxWidth: '30rem',
    },
    [theme.breakpoints.up('sm')]: {
      maxWidth: '40rem',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '30rem',
    },
  },
  gridImage: {
    [theme.breakpoints.down('md')]: {},
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '1rem',
    },
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '1rem',
    },
    [theme.breakpoints.up('md')]: {
      paddingBottom: '1.5rem',
    },
    [theme.breakpoints.up('lg')]: {
      paddingBottom: '2rem',
    },
    [theme.breakpoints.up('xl')]: {
      paddingBottom: '2.8rem',
    },
    [theme.breakpoints.up('xxl')]: {
      paddingBottom: '3.25rem',
    },
  },
}));

const HowToStart = ({ value }) => {
  const myRef = React.createRef();
  const offsetCalcul = ScrollToELement();
  const theme = useTheme();
  const classes = useStyles();
  const matchesBelowMD = useMediaQuery(theme.breakpoints.down('md'));
  const offsetCalcul2 = useIsMobile('start');
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    if (value === 3) {
      ScrollToELement2(myRef.current.offsetTop - offsetCalcul + offsetCalcul2);
    }
  }, [value]);

  return (
    <Grid
      ref={myRef}
      container
      direction="row"
      justifyContent="space-between"
      className={classes.mainGrid}
    >
      <Grid item xs={12} sm={12} md={6}>
        <Grid container direction="column">
          <Grid item>
            <Typography
              variant={matchesBelowMD ? 'subtitle2' : 'h1'}
              className={classes.title}
            >
              How to start?
            </Typography>
            <Typography variant="h4" className={classes.title}>
              There are a lot of airdrops happening in the crypto sphere and
              millions of people have to spend a lot of time looking for them.
              We've created a simple tool that makes this process simpler.
            </Typography>
            <Typography variant="h4" className={classes.title}>
              This is real magic in the cryptocurrency world because AirMask
              only finds interesting airdrops.
            </Typography>
          </Grid>
          <Grid item>
            <GridHowToStart />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={6} className={classes.gridImage}>
        <Grid
          container
          justifyContent={{
            xs: 'center',
            sm: 'center',
            md: 'center',
            lg: 'flex-end',
            xl: 'flex-end',
          }}
          className={classes.image}
        >
          <Lottie options={defaultOptions} />
          {/* <img
            alt={HowToStartIllustration}
            src={HowToStartIllustration}
            className={classes.image}
          /> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HowToStart;
