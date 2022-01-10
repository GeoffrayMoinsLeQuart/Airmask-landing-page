/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ScrollToELement, ScrollToELement2 } from '../common/scroll-to-element';
import { Typography, Grid, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from '@mui/styles';
import AboutAirmaskInNumbers from '../assets/illustrations/airmask-in-numbers.svg';
import CardAirmaskInNumber from '../common/card-airmask-in-numbers';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    [theme.breakpoints.down('md')]: {
      paddingTop: '4.5rem',
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: '4.5rem',
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: '5.5rem',
    },
    [theme.breakpoints.up('xl')]: {
      paddingTop: '6.5rem',
    },
    [theme.breakpoints.up('xxl')]: {
      paddingTop: '8.5rem',
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
    width: '100%',
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      maxHeight: '30rem',
    },
    [theme.breakpoints.up('md')]: {
      maxHeight: '40rem',
    },
    [theme.breakpoints.up('lg')]: {
      maxHeight: '50rem',
    },
    [theme.breakpoints.up('xl')]: {
      maxHeight: '60rem',
    },
    [theme.breakpoints.up('xxl')]: {
      maxHeight: '70rem',
    },
  },
  gridImage:{
    [theme.breakpoints.down('md')]: {
      display: 'none',
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
}));

const AirmaskInNumber = ({ value }) => {
  const myRef = React.createRef();
  const offsetCalcul = ScrollToELement();
  const theme = useTheme();
  const classes = useStyles();
  const matchesBelowMD = useMediaQuery(theme.breakpoints.down('md'));


  useEffect(() => {
    if (value === 1) {
      ScrollToELement2(myRef.current.offsetTop - offsetCalcul);
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
      <Grid item xs={12} sm={6} md={6} className={classes.gridImage}>
        <img
          alt={AboutAirmaskInNumbers}
          src={AboutAirmaskInNumbers}
          className={classes.image}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6} className={classes.gridText}>
        <Grid container direction="column">
          <Grid item>
            <Typography
              variant={matchesBelowMD ? 'h2' : 'h1'}
              className={classes.title}
            >
              Airmask in numbers
            </Typography>
          </Grid>
          <CardAirmaskInNumber
            title="25"
            subTitle="Only 25 cents per token"
            text="This is your lucky day, buy tokens at 25 cents apiece in the first airdrop."
          />
          <CardAirmaskInNumber
            title="60%"
            subTitle="60% discounts for influencers"
            text="If you can offer us something interesting, buy tokens for 10 cents."
          />
          <CardAirmaskInNumber
            title="100 million"
            subTitle="Limited token supply"
            text="100 million tokens are waiting for you!"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AirmaskInNumber;
