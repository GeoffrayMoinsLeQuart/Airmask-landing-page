import { makeStyles } from '@mui/styles';
import { Typography, Grid } from '@mui/material';


const useStyles = makeStyles((theme) => ({
  gridContainerBox: {
    backgroundColor: 'yellow',
    // [theme.breakpoints.up('lg')]: {
    //   marginTop: '12.4375rem',
    //   paddingRight: '8.75rem',
    // },
    // [theme.breakpoints.up('xl')]: {
    //   zIndex: 1,
    //   position: 'absolute',
    //   left: '0px',
    //   top: '0px',
    // },
  },
  gridText: {
    backgroundColor: 'red',
  },
  elementGridText: {
    paddingTop: '1rem',
    paddingBottom: '1rem',
    [theme.breakpoints.down('sm')]: {
      width: '300px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '500px',
    },
    [theme.breakpoints.up('md')]: {
      width: '700px',
    },
  },
  image: {
    [theme.breakpoints.down('sm')]: {
      width: '300px',
      height: '300px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '500px',
      height: '500px',
    },
    [theme.breakpoints.up('md')]: {
      width: '700px',
      height: '700px',
    },
  },
}));

const ContainerHowItWorks = ({ title, subTitle, image }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={6} className={classes.gridContainerBox}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.gridText}
      >
        <img alt={image} src={image} className={classes.image} />
        <Typography
          variant="h2"
          className={classes.elementGridText}
          align="center"
        >
          {title}
        </Typography>
        <Typography
          variant="h4"
          className={classes.elementGridText}
          align="center"
        >
          {subTitle}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ContainerHowItWorks;
