/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Typography, Grid, useTheme, Button, autocompleteClasses } from '@mui/material';
import { makeStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import GetStartedIllustration from '../../assets/illustrations/get-started.svg';
import GetStartedIllustrationMobile from '../../assets/illustrations/get-started2.svg';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    borderRadius: '2.1875rem !important',
    minHeight: '23.125rem !important',
    // minWidth: '72.5rem !important',
    width: '100%',
    backgroundColor: theme.palette.secondary.main + ' !important',
    marginBottom: '5rem',
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
      paddingLeft: '3rem',
    },
  },
  image: {
    [theme.breakpoints.down('xl')]: {
      maxHeight: '18.75rem !important',
    },
    [theme.breakpoints.down('md')]: {
      maxHeight: '15rem !important',
    },
    [theme.breakpoints.down('sm')]: {
      maxHeight: '12rem !important',
    },
    '@media (max-width:356px)': {
      maxHeight: '10rem !important',
    },
    '@media (max-width:300px)': {
      maxHeight: '8rem !important',
    },
  },
  buttonDownloadHeader: {
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
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '2rem',
    },
  },
}));

const GetStarted = ({ value }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesUpMD = useMediaQuery(theme.breakpoints.up('md'));
  const matchesBelowMD = useMediaQuery(theme.breakpoints.down('md'));
  const typographyProps = {
    align: matchesBelowMD ? 'center' : 'left',
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
          <Grid item>
            <Typography
              {...typographyProps}
              variant={matchesBelowMD ? 'h2' : 'h1'}
              className={classes.title}
            >
              Get Started
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h4"
              className={classes.subtitle}
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
                  className={classes.buttonDownloadHeader}
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
        >
          <img
            alt={GetStartedIllustrationMobile}
            src={GetStartedIllustrationMobile}
            className={classes.image}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GetStarted ;
