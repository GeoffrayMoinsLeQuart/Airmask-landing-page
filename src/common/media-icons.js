import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import twitter from '../assets/logos/twitter.svg';
import discord from '../assets/logos/discord.svg';
import telegram from '../assets/logos/telegram.svg';

const useStyles = makeStyles((theme) => ({
  socialContainer: {
    right: '1.5em',
    minWidth: '10rem',
    [theme.breakpoints.down('md')]: {
      marginTop: '0 !important',
    },
  },
  icon: {
    height: '1.2rem',
    width: '1.2rem',
    [theme.breakpoints.down('md')]: {
      height: '1.2rem',
      width: '1.2rem',
    },
    '&:hover': {
      opacity: 0.7,
    },
  },
}));

const MediaIcons = ({ designGrid, order }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      item
      xs={12}
      md={3}
      justifyContent={designGrid}
      alignItems="center"
      order={order}
      spacing={4}
      className={classes.socialContainer}
    >
      <Grid
        item
        component={'a'}
        href="https://www.facebook.com"
        rel="noopener noreferrer"
        target="_blank"
        className={classes.gridIcon}
      >
        <img alt="telegram logo" src={telegram} className={classes.icon} />
      </Grid>
      <Grid
        item
        component={'a'}
        href="https://www.twitter.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img alt="twitter logo" src={twitter} className={classes.icon} />
      </Grid>
      <Grid
        item
        component={'a'}
        href="https://www.instagram.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img alt="discord logo" src={discord} className={classes.icon} />
      </Grid>
    </Grid>
  );
};

export default MediaIcons;
