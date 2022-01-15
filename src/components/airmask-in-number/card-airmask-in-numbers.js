import { makeStyles } from '@mui/styles';
import { Typography, Grid, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  gridContainerBox: {
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '1rem',
    },
    [theme.breakpoints.down('md')]: {
      paddingBottom: '1.5rem',
    },
    [theme.breakpoints.up('xl')]: {
      paddingBottom: '2.8rem',
    },
    [theme.breakpoints.up('xxl')]: {
      paddingBottom: '3.25rem',
    },
  },
  elementGridText: {
    paddingTop: '0.3rem',
    paddingBottom: '0.3rem',
  },
  gridText: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));

const CardAirmaskInNumber = ({ title, subTitle, text }) => {
  const theme = useTheme();
  const classes = useStyles();
  const matchesBelowMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid item className={classes.gridContainerBox}>
      <Grid
        container
        direction="column"
        alignItems="flex-start"
        className={classes.gridText}
      >
        <Grid item>
          <Typography
            variant={matchesBelowMD ? 'subtitle2' : 'h1'}
            className={classes.elementGridText}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant={matchesBelowMD ? 'body1' : 'h4'} color='primary' className={classes.elementGridText}>
            {subTitle}
          </Typography>
        </Grid>
        <Grid item className={classes.gridText}>
          <Typography variant={matchesBelowMD ? 'body1' : 'h4'} className={classes.elementGridText}>
            {text}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CardAirmaskInNumber;
