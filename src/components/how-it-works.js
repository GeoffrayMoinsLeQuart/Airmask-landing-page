/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ScrollToELement, ScrollToELement2 } from '../common/scroll-to-element';
import { Typography, Grid, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ContainerHowItWorks from '../common/container-how-it-works';
import WeResearch from '../assets/illustrations/we-research.svg';
import AutomaticParticipation from '../assets/illustrations/automatic-participation.svg';
import YouGetTokensOrNfts from '../assets/illustrations/you-get-tokens-or-nfts.svg';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    [theme.breakpoints.up('lg')]: {
      minHeight: '56.25rem !important',
    },
  },
  gridContainerBox: {
    width: '100%',
  },
  gridContainerText: {
    [theme.breakpoints.down('md')]: {},
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
      marginTop: '7.75rem',
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: '7.75rem',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '10.5rem',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '12.4375rem',
      paddingRight: '8.75rem',
    },
    [theme.breakpoints.up('xl')]: {
      zIndex: 1,
      position: 'absolute',
      left: '0px',
      top: '0px',
    },
  },
  image: {
    maxHeight: '700px',
  },
  elementGridText: {
    paddingTop: '1rem',
    paddingBottom: '1rem',
  },
}));

const HowItWorks = ({ value }) => {
  const myRef = React.createRef();
  const offsetCalcul = ScrollToELement();
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));

  useEffect(() => {
    if (value === 0) {
      ScrollToELement2(myRef.current.offsetTop - offsetCalcul);
    }
  }, [value]);
  return (
    <div ref={myRef}>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        className={classes.gridContainer}
      >
        <Grid item xs={12} className={classes.gridContainerText}>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            className={classes.gridText}
          >
            <Typography variant="h1" className={classes.title}>
              How does Airmask work?
            </Typography>
            <Typography variant="h4" className={classes.subtitle}>
              Airmask is a non-custodian wallet that helps you find the best
              opportunities in the crypto world.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.gridContainer}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            className={classes.gridText}
          >
            {matches && (
              <Grid item xs={12} className={classes.gridContainerBox}>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  className={classes.gridText}
                >
                  <img
                    alt={WeResearch}
                    src={WeResearch}
                    className={classes.image}
                  />
                  <Typography
                    variant="h2"
                    className={classes.elementGridText}
                    align="left"
                  >
                    We research
                  </Typography>
                  <Typography
                    variant="h4"
                    className={classes.elementGridText}
                    align="left"
                  >
                    Airmask looks for new airdrops for you and analyzes which
                    ones will be the most profitable.
                  </Typography>
                </Grid>
              </Grid>
            )}
            {!matches && (
              <ContainerHowItWorks
                title="We research"
                subTitle="Airmask looks for new airdrops for you and analyzes which ones
                  will be the most profitable."
                image={AutomaticParticipation}
              />
            )}
          </Grid>

          <Grid
            container
            direction={{
              xs: 'column',
              sm: 'column',
              md: 'column',
              lg: 'row',
              xl: 'row',
            }}
            justifyContent="center"
            alignItems="center"
            className={classes.gridText}
          >
            <ContainerHowItWorks
              title="Automatic participation"
              subTitle="You don't have to choose which airdrop to participate in. Our system will do it for you."
              image={AutomaticParticipation}
            />

            <ContainerHowItWorks
              title="You get tokens or NTFs"
              subTitle="Becoming a crypto trader is easy! And you don't need to spend hours researching the market and building strategies."
              image={YouGetTokensOrNfts}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default HowItWorks;
