import { makeStyles } from '@mui/styles';
import { Typography, Grid, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  gridContainerBox: {
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '1rem',
    },
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '1rem',
    },
    [theme.breakpoints.up('md')]: {
      paddingBottom: '1.5rem',
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
  elementGridText: {
    paddingTop: '0.3rem',
    paddingBottom: '0.3rem',
  },
  GridText: {
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
            variant={matchesBelowMD ? 'h2' : 'h1'}
            className={classes.elementGridText}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant={matchesBelowMD ? 'h4' : 'h2'}
            className={classes.elementGridText}
          >
            {subTitle}
          </Typography>
        </Grid>
          <Grid item className={classes.GridText}>
            <Typography variant="h4" className={classes.elementGridText}>
              {text}
            </Typography>
          </Grid>
      </Grid>
    </Grid>
  );
};

export default CardAirmaskInNumber;
