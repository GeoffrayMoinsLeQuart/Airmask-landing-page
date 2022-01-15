/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Typography, Grid, useTheme, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import GetStartedIllustrationMobile from '../../assets/illustrations/get-started2.svg';
import Lottie from 'react-lottie';
import animationData from '../../assets/animation/get-started/get-started.json';


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    borderRadius: '2.1875rem !important',
    minHeight: '23.125rem !important',
    // minWidth: '72.5rem !important',
    width: '100%',
    backgroundColor: theme.palette.secondary.main + ' !important',
    marginBottom: '5rem',
    [theme.breakpoints.up('xxl')]: {
      maxWidth: '125rem',
      margin: 'auto',
    },
  },
  gridText: {
    [theme.breakpoints.down('md')]: {
      paddingTop: '3rem',
      paddingBottom: '3rem',
      paddingRight: '3rem',
      paddingLeft: '3rem',
      minHeight: '20rem',
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: '1rem',
      paddingLeft: '3rem',
      maxHeight: '18.75rem !important',
    },
    [theme.breakpoints.up('lg')]: {
      maxHeight: '19.75rem !important',
    },
    [theme.breakpoints.up('xl')]: {
      paddingTop: '2rem',
      maxHeight: '20.75rem !important',
    },
  },
  image: {
    margin: 'auto',
    maxWidth: '40rem !important',
    [theme.breakpoints.down('xxl')]: {
      maxWidth: '35rem !important',
    },
    [theme.breakpoints.down('xl')]: {
      maxWidth: '30rem !important',
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '30rem !important',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '25rem !important',
    },
  },
  buttonGetStarted: {
    margin: 'auto !important',
    borderRadius: '2.5rem !important',
    textTransform: 'none !important',
    fontSize: '1rem !important',
    lineHeight: '1.3rem !important',
    fontWeight: '600 !important',
    minWidth: '12.5rem !important',
    height: '3.75rem !important',
    backgroundColor: theme.palette.primary.main + ' !important',
    color: theme.palette.secondary.main + ' !important',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main + ' !important',
      color: theme.palette.primary.main + ' !important',
    },
    '&:focus': {
      backgroundColor: theme.palette.secondary.opacity60 + ' !important',
      color: theme.palette.primary.main + ' !important',
    },
  },
  title: {
    [theme.breakpoints.up('md')]: {
      fontSize: '3rem !important',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '4rem !important',
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '1rem',
    },
  },
  subtitle: {
    [theme.breakpoints.down('md')]: {
      paddingBottom: '2rem',
    },
  },
  gridTitle: {
    [theme.breakpoints.down('md')]: {
      margin: 'auto !important',
    },
  },
}));

const GetStarted = ({ value }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesBelowMD = useMediaQuery(theme.breakpoints.down('md'));
  const typographyProps = {
    align: matchesBelowMD ? 'center' : 'left',
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignContent="center"
      className={classes.mainContainer}
    >
      <Grid item sm={12} md={5} xl={6}>
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          sx={{ height: '100%' }}
          className={classes.gridText}
        >
          <Grid item className={classes.gridTitle}>
            <Typography
              {...typographyProps}
              variant={matchesBelowMD ? 'subtitle2' : 'h1'}
              className={classes.title}
            >
              Get Started
            </Typography>
          </Grid>
          <Grid item className={classes.subtitle}>
            <Typography
              variant={matchesBelowMD ? 'body1' : 'h4'}
              {...typographyProps}
            >
              Airmask is a non-custodian wallet that helps you find the best
              opportunities in the crypto world.
            </Typography>
          </Grid>
          <Grid item>
            <Grid
              container
              justifyContent={{
                xs: 'center',
                sm: 'center',
                md: 'flex-start',
                lg: 'flex-start',
              }}
            >
              <Grid item>
                <Button
                  className={classes.buttonGetStarted}
                  variant="contained"
                  backgroundcolor="red"
                >
                  Get Started
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={12} md={7} xl={6}>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          sx={{ height: '100%' }}
          className={classes.image}
        >
          <Lottie options={defaultOptions}  />
          {/* <img
            alt={GetStartedIllustrationMobile}
            src={GetStartedIllustrationMobile}
            className={classes.image}
          /> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GetStarted ;
