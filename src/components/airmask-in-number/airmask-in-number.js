/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ScrollToELement, ScrollToELement2 } from '../../common/scroll-to-element';
import { Typography, Grid, useTheme, useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AboutAirmaskInNumbersDesktop from '../../assets/illustrations/airmask-in-numbers.svg';
import AboutAirmaskInNumbersMobile from '../../assets/illustrations/airmask-in-numbers2.svg';
import AboutAirmaskInNumbersMobile2 from '../../assets/illustrations/airmask-in-numbers3.svg';
import CardAirmaskInNumber from './card-airmask-in-numbers';
import useIsMobile from '../../common/get-size-screen';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    position: 'relative',
    [theme.breakpoints.down('md')]: {
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
  gridTitle: {
    [theme.breakpoints.down('md')]: {
      paddingBottom: '2.5rem !important',
      paddingTop: '4.5rem',
    },
    [theme.breakpoints.up('md')]: {
      display: 'none !important',
    },
  },
  image: {
    [theme.breakpoints.down('md')]: {
      maxHeight: '20rem',
      height: '100%',
      position: 'absolute',
      right: 0,
    },
    [theme.breakpoints.down('sm')]: {
      maxHeight: '25rem',
      height: '100%',
      right: '-1.5rem',
      bottom: '1.5rem',
      position: 'absolute',
    },
    '@media (max-width:456px)': {
      maxHeight: '28rem !important',
    },
    [theme.breakpoints.up('md')]: {
      paddingBottom: '1.5rem',
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
  gridImage: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '3rem',
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '3rem',
    },
    [theme.breakpoints.up('md')]: {
      paddingBottom: '2rem',
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
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: '100%',
      maxHeight: '30rem',
      zIndex: '10',
    },
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '3rem',
    },
  },
}));

const AirmaskInNumber = ({ value }) => {

  const myRef = React.createRef();
  const theme = useTheme();
  const classes = useStyles();
  const matchesBelowSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesBelowMD = useMediaQuery(theme.breakpoints.down('md'));
  const offsetCalcul = ScrollToELement();
  const offsetCalcul2 = useIsMobile('number');
  const typographyProps = {
    align: matchesBelowMD ? 'center' : 'left',
  };
  useEffect(() => {
    if (value === 1) {
      ScrollToELement2(myRef.current.offsetTop - offsetCalcul + offsetCalcul2);
    }
  }, [value]);

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        className={classes.gridTitle}
      >
        <Grid item>
          <Typography
            {...typographyProps}
            variant={matchesBelowMD ? 'subtitle2' : 'h1'}
          >
            Airmask in numbers
          </Typography>
        </Grid>
      </Grid>
      <Grid
        ref={myRef}
        container
        direction="row"
        justifyContent="space-between"
        className={classes.mainGrid}
      >
        {matchesBelowMD && (
          <img
            alt={
              matchesBelowSM
                ? AboutAirmaskInNumbersMobile
                : AboutAirmaskInNumbersMobile2
            }
            src={
              matchesBelowSM
                ? AboutAirmaskInNumbersMobile
                : AboutAirmaskInNumbersMobile2
            }
            className={classes.image}
          />
        )}
        {!matchesBelowMD && (
          <Grid item xs={12} sm={6} md={6} className={classes.gridImage}>
            <img
              alt={AboutAirmaskInNumbersDesktop}
              src={AboutAirmaskInNumbersDesktop}
              className={classes.image}
            />
          </Grid>
        )}
        <Grid item xs={12} sm={12} md={6} className={classes.gridText}>
          <Grid
            container
            direction="column"
            alignContent={{
              xs: 'flex-start',
              sm: 'flex-start',
              md: 'flex-start',
              lg: 'center',
              xl: 'center',
              xxl: 'center',
            }}
          >
            <Grid item>
              <Typography
                variant={matchesBelowMD ? 'subtitle2' : 'h1'}
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
    </>
  );
};

export default AirmaskInNumber;
