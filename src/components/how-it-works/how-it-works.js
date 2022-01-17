/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ScrollToELement, ScrollToELement2 } from '../../common/scroll-to-element';
import { Typography, Grid, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CardHowItWorks from './card-how-it-works';
import WeResearch from '../../assets/illustrations/we-research.svg';
import AutomaticParticipation from '../../assets/illustrations/automatic-participation.svg';
import YouGetTokensOrNfts from '../../assets/illustrations/you-get-tokens-or-nfts.svg';
import automaticParticipationAnimation from '../../assets/animation/automatic-participation.json';
import YouGetTokenAnimation from '../../assets/animation/you-get-tokens.json';
import WeResearchAnimation from '../../assets/animation/we-research.json';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    [theme.breakpoints.up('xxl')]: {
      maxWidth: '125rem',
      margin: 'auto',
    },
  },
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
    [theme.breakpoints.down('md')]: {
      marginTop: '1rem',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '3rem',
    },
  },
  image: {
    maxHeight: '43.75rem',
  },
  elementGridTitle: {
    paddingTop: '1rem',
    paddingBottom: '1rem',
  },
  elementGridSubtitle: {
    paddingBottom: '2rem',
  },
  gridTextTop: {
    backgroundColor: theme.palette.ternary.opacity3,
    paddingLeft: '2.5rem',
    paddingRight: '1.5rem',
    paddingTop: '1.5rem',
    borderRadius: '2rem',
  },
}));

const HowItWorks = ({ value }) => {
  const myRef = React.createRef();
  const offsetCalcul = ScrollToELement();
  const classes = useStyles();
  const theme = useTheme();
  const matchesUpMD = useMediaQuery(theme.breakpoints.up('md'));
  const matchesBelowMD = useMediaQuery(theme.breakpoints.down('md'));
  const typographyProps = {
    align: matchesBelowMD ? 'center' : 'left',
  };

  useEffect(() => {
    if (value === 0) {
      ScrollToELement2(myRef.current.offsetTop - offsetCalcul);
    }
  }, [value]);
  return (
    <Grid
      ref={myRef}
      container
      justifyContent="space-between"
      className={classes.mainGrid}
    >
      <Grid item xs={12}>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          className={classes.gridTitle}
        >
          <Typography
            variant={matchesBelowMD ? 'subtitle2' : 'h1'}
            className={classes.title}
          >
            How does Airmask work?
          </Typography>
          <Typography
            variant={matchesBelowMD ? 'body1' : 'h4'}
            className={classes.subtitle}
            {...typographyProps}
          >
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
          {matchesUpMD && (
            <Grid item xs={12} className={classes.gridContainerBox}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                className={classes.gridTextTop}
              >
                <img
                  alt={WeResearch}
                  src={WeResearch}
                  className={classes.image}
                />
                <Typography
                  variant={matchesBelowMD ? 'body2' : 'h2'}
                  className={classes.elementGridTitle}
                  align="left"
                >
                  We research
                </Typography>
                <Typography
                  variant={matchesBelowMD ? 'body1' : 'h4'}
                  className={classes.elementGridSubtitle}
                  align="left"
                >
                  Airmask looks for new airdrops for you and analyzes which ones
                  will be the most profitable.
                </Typography>
              </Grid>
            </Grid>
          )}
          {!matchesUpMD && (
            <CardHowItWorks
              title="We research"
              subTitle="Airmask looks for new airdrops for you and analyzes which ones
                  will be the most profitable."
              image={AutomaticParticipation}
              illustration={WeResearchAnimation}
            />
          )}
        </Grid>

        <Grid
          container
          className={classes.gridText}
        >
          <CardHowItWorks
            direction="left"
            title="Automatic participation"
            subTitle="You don't have to choose which airdrop to participate in. Our system will do it for you."
            image={AutomaticParticipation}
            illustration={automaticParticipationAnimation}
          />

          <CardHowItWorks
            direction="right"
            title="You get tokens or NTFs"
            subTitle="Becoming a crypto trader is easy! And you don't need to spend hours researching the market and building strategies."
            image={YouGetTokensOrNfts}
            illustration={YouGetTokenAnimation}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HowItWorks;
