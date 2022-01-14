/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ScrollToELement, ScrollToELement2 } from '../../common/scroll-to-element';
import {
  Typography,
  Grid,
  useTheme,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from '@mui/styles';
import TeamMember from '../../assets/images/team-member.svg';
import CardTeam from './card-team'

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    [theme.breakpoints.down('md')]: {
      paddingTop: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: '1.5rem',
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: '2.5rem',
    },
    [theme.breakpoints.up('xl')]: {
      paddingTop: '3.5rem',
    },
    [theme.breakpoints.up('xxl')]: {
      paddingTop: '2.5rem',
      maxWidth: '125rem',
      margin: 'auto',
    },
  },
  title: {
    paddingBottom: '0.5rem',
  },
  subtitle: {
    paddingBottom: '3.75rem',
  },
}));

const Team = ({ value }) => {
  const myRef = React.createRef();
  const offsetCalcul = ScrollToELement();
  const classes = useStyles();
  const theme = useTheme();
  const matchesBelowMD = useMediaQuery(theme.breakpoints.down('md'));
  const typographyProps = {
    align: matchesBelowMD ? 'center' : 'left',
  };

  useEffect(() => {
    if (value === 2) {
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
              variant={matchesBelowMD ? 'h1Mobile' : 'h1'}
              className={classes.title}
            >
              Meet our team
            </Typography>
            <Typography
              variant={matchesBelowMD ? 'h4Mobile' : 'h4'}
              className={classes.subtitle}
              {...typographyProps}
            >
              Know our team by sight. We have tried on this project to create
              for you a unique tool for earning tokens.
            </Typography>
          </Grid>
        </Grid>
        <Grid item sx={{ margin: 'auto' }}>
          <Grid container justifyContent="center">
            <CardTeam
              title="Geoffray Atlan"
              subTitle="Front-end developer"
              image={TeamMember}
            />
            <CardTeam
              title="Geoffray Atlan"
              subTitle="Front-end developer"
              image={TeamMember}
            />
            <CardTeam
              title="Geoffray Atlan"
              subTitle="Front-end developer"
              image={TeamMember}
            />
          </Grid>
        </Grid>
      </Grid>
    );
};

export default Team;
