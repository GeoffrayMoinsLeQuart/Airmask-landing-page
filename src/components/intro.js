/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ScrollToELement, ScrollToELement2 } from '../common/scroll-to-element';
import StyledButtonWithIcon from '../common/button-with-icon';
import { Typography, Grid, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import howItWorksLogo from '../assets/illustrations/how-it-works.svg'
import useMediaQuery from '@mui/material/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    [theme.breakpoints.up('lg')]: {
      minHeight: '56.25rem !important',
    },
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
    [theme.breakpoints.down('sm')]: {},
    [theme.breakpoints.up('sm')]: {},
    [theme.breakpoints.up('md')]: {
      maxWidth: '43.75rem',
    },
    [theme.breakpoints.up('lg')]: {
      minWidth: '53.75rem',
    },
  },
  elementGridText: {
    paddingTop: '2rem',
    paddingBottom: '2rem',
  },
}));

const Intro = ({ value }) => {
  const myRef = React.createRef();
  const offsetCalcul = ScrollToELement();
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));

  useEffect(() => {
    if (value === 'Home') {
      ScrollToELement2(myRef.current.offsetTop - offsetCalcul);
    }
  }, [value]);
  return (
    <div ref={myRef}>
      <Grid
        container
        direction={{
          xs: 'column',
          sm: 'column',
          md: 'column',
          lg: 'row',
          xl: 'row',
        }}
        justifyContent="space-between"
        className={classes.gridContainer}
      >
        <Grid item lg={12} xl={6} xxl={7} className={classes.gridContainerText}>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems={{
              xs: 'center',
              sm: 'center',
              md: 'center',
              lg: 'center',
              xl: 'flex-start',
            }}
            className={classes.gridText}
          >
            {matches && (
              <StyledButtonWithIcon>
                Never miss an opportunity! 😎
              </StyledButtonWithIcon>
            )}
            <Typography variant="h1" className={classes.elementGridText}>
              Get airdrops at the speed of light
            </Typography>
            <Typography variant="h4" className={classes.elementGridText}>
              The first version of AirMask is ready to use. Start to earning
              tokens right now. Come and get it!
            </Typography>
            <StyledButtonWithIcon>
              Download now
            </StyledButtonWithIcon>
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
    </div>
  );
};

export default Intro;
