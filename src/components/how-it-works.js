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
  gridContainerBox: {
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  },
  gridTitle: {
    [theme.breakpoints.up('md')]: {
      marginTop: '3rem',
    },
  },
  gridText: {
    [theme.breakpoints.up('md')]: {
      marginTop: '3rem',
    },
  },
  elementGridText: {
    paddingTop: '1rem',
    paddingBottom: '1rem',
  },
  image: {
    maxHeight: '700px',
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
      <Grid container justifyContent="space-between">
        <Grid item xs={12}>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            className={classes.gridTitle}
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
        <Grid item xs={12}>
          <Grid
            container
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
            justifyContent="space-between"
            alignItems="space-between"
            className={classes.gridText}
          >
            <ContainerHowItWorks
              title="Automatic participation"
              subTitle="You don't have to choose which airdrop to participate in. Our system will do it for you."
              image={AutomaticParticipation}
              optionCSS="left"
            />

            <ContainerHowItWorks
              title="You get tokens or NTFs"
              subTitle="Becoming a crypto trader is easy! And you don't need to spend hours researching the market and building strategies."
              image={YouGetTokensOrNfts}
              optionCSS="right"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default HowItWorks;
