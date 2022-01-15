import { makeStyles } from '@mui/styles';
import { Typography, Grid, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Lottie from 'react-lottie';

const useStyles = makeStyles((theme) => ({
  gridContainerBox: {
    [theme.breakpoints.down('md')]: {
      paddingTop: '1rem',
      paddingBottom: '1rem',
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: '2rem',
      paddingBottom: '2rem',
    },
  },
  gridText: {
    borderRadius: '2rem',
    backgroundColor: theme.palette.ternary.opacity3,
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      height: '30.5rem',
      paddingRight: '1.5rem',
      paddingLeft: '1.5rem',
    },
    [theme.breakpoints.up('sm')]: {
      paddingRight: '3rem !important',
      paddingLeft: '3rem !important',
      height: '37.5rem !important',
      width: '31.25rem !important',
    },
    [theme.breakpoints.up('md')]: {
      height: '37.5rem !important',
      width: '23.5rem !important',
    },
    [theme.breakpoints.up('lg')]: {
      height: '43.75rem !important',
      width: '27rem !important',
    },
    [theme.breakpoints.up('xl')]: {
      height: '55rem !important',
      width: '37rem !important',
    },
    [theme.breakpoints.up('xxl')]: {
      height: '67rem !important',
      width: '52rem !important',
    },
  },
  elementGridText: {
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
  },
  image: {
    paddingBottom: '1.5rem',
    width: '100%',
    height: '100%',
  },
}));

const CardHowItWorks = ({ title, subTitle, image, illustration }) => {
  const theme = useTheme();
  const classes = useStyles();
  const matchesBelowMD = useMediaQuery(theme.breakpoints.down('md'));
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: illustration,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid item sm={12} md={6} className={classes.gridContainerBox}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.gridText}
      >
        <Grid item sm={6}>
          <Lottie options={defaultOptions} />
          {/* <img alt={image} src={image} className={classes.image} /> */}
        </Grid>
        <Grid item sm={2}>
          <Typography
            variant={matchesBelowMD ? 'body2' : 'h2'}
            className={classes.elementGridText}
            align="center"
          >
            {title}
          </Typography>
        </Grid>
        <Grid item sm={2}>
          <Typography
            variant={matchesBelowMD ? 'body1' : 'h4'}
            className={classes.elementGridText}
            align="center"
          >
            {subTitle}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CardHowItWorks;
