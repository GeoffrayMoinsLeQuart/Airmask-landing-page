/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ScrollToELement, ScrollToELement2 } from '../../common/scroll-to-element';
import { Typography, Grid, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  gridContainerBox: {
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  },
}));

const Team = ({ value }) => {
  const myRef = React.createRef();
  const offsetCalcul = ScrollToELement();
  const classes = useStyles();
  const theme = useTheme();
  const matchesUpMD = useMediaQuery(theme.breakpoints.up('md'));
  const matchesBelowMD = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    if (value === 2) {
      ScrollToELement2(myRef.current.offsetTop - offsetCalcul);
    }
  }, [value]);
    return (
      <Grid ref={myRef} container justifyContent="space-between">
        <Grid item xs={12}>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            className={classes.gridTitle}
          >
            <Typography
              variant={matchesBelowMD ? 'h2' : 'h1'}
              className={classes.title}
            >
              Meet our team
            </Typography>
            <Typography variant="h4" className={classes.subtitle}>
              Know our team by sight. We have tried on this project to create
              for you a unique tool for earning tokens.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    );
};

export default Team;
