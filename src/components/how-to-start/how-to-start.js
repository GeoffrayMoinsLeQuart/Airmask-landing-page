/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Typography, Grid, useTheme, useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles';
import HowToStartIllustration from '../../assets/illustrations/how-to-start.svg';
import GridHowToStart from './grid-how-to-start';
import { ScrollToELement, ScrollToELement2 } from '../../common/scroll-to-element';
import useIsMobile from '../../common/get-size-screen';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    [theme.breakpoints.down('md')]: {
      paddingTop: '4.5rem',
      paddingBottom: '4.5rem',
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: '4.5rem',
      paddingBottom: '5.5rem !important',
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: '5.5rem',
      paddingBottom: '5.5rem !important',
    },
    [theme.breakpoints.up('xl')]: {
      paddingTop: '6.5rem',
      paddingBottom: '5.5rem !important',
    },
    [theme.breakpoints.up('xxl')]: {
      paddingTop: '8.5rem',
      paddingBottom: '5.5rem',
      maxWidth: '125rem',
      margin: 'auto',
    },
  },
  elementGridText: {
    [theme.breakpoints.up('xxl')]: {
      height: '67rem !important',
      width: '52rem !important',
    },
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
  },
  image: {
    paddingBottom: '1.5rem',
    [theme.breakpoints.down('md')]: {
      paddingTop: '3rem',
    },
    [theme.breakpoints.up('xs')]: {
      maxHeight: '30rem',
    },
    [theme.breakpoints.up('sm')]: {
      maxHeight: '40rem',
    },
    [theme.breakpoints.up('md')]: {
      maxHeight: '40rem',
    },
    [theme.breakpoints.up('lg')]: {
      maxHeight: '40rem',
    },
    [theme.breakpoints.up('xl')]: {
      maxHeight: '60rem',
    },
    [theme.breakpoints.up('xxl')]: {
      maxHeight: '70rem',
    },
  },
  gridImage: {
    height: '100% !important',
    [theme.breakpoints.up('md')]: {
      paddingTop: '6.5rem',
    },
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
  gridText: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '3rem',
    },
  },
  gridTextTitle: {
    [theme.breakpoints.down('md')]: {
      paddingBottom: '3.25rem',
    },
    [theme.breakpoints.up('md')]: {
      paddingBottom: '1.25rem',
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
  const typographyProps = {
    align: matchesBelowMD ? 'center' : 'left',
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
      <Grid item xs={12} sm={12} md={6} className={classes.gridText}>
        <Grid container direction="column">
          <Grid item className={classes.gridTextTitle}>
            <Typography
              variant={matchesBelowMD ? 'h1Mobile' : 'h1'}
              className={classes.title}
              {...typographyProps}
            >
              How to start?
            </Typography>
            <Typography variant={'h4'} className={classes.title}>
              There are a lot of airdrops happening in the crypto sphere and
              millions of people have to spend a lot of time looking for them.
              We've created a simple tool that makes this process simpler.
            </Typography>
            <Typography variant={'h4'} className={classes.title}>
              This is real magic in the cryptocurrency world because AirMask
              only finds interesting airdrops.
            </Typography>
          </Grid>
          <Grid item>
            <GridHowToStart />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Grid
          container
          justifyContent={{
            xs: 'center',
            sm: 'center',
            md: 'center',
            lg: 'flex-end',
            xl: 'flex-end',
          }}
          alignContent={{
            xs: 'center',
            sm: 'center',
            md: 'center',
            lg: 'center',
            xl: 'center',
          }}
          className={classes.gridImage}
        >
          <img
            alt={HowToStartIllustration}
            src={HowToStartIllustration}
            className={classes.image}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HowToStart;
