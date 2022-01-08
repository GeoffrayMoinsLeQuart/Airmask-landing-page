import { makeStyles } from '@mui/styles';
import { Typography, Grid } from '@mui/material';


const useStyles = makeStyles((theme) => ({
  gridContainerBox: {
    width: '100%',
    '&:nth-child(1)': {
      [theme.breakpoints.up('xl')]: {
        paddingRight: '3rem !important',
      },
    },
    '&:nth-child(2)': {
      [theme.breakpoints.up('xl')]: {
        paddingLeft: '3rem !important',
      },
    },
  },
  gridText: {
    borderRadius: '2rem',
    backgroundColor: theme.palette.ternary.opacity3,
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      height: '880px !important',
    },
    [theme.breakpoints.up('sm')]: {
      paddingRight: '3rem !important',
      paddingLeft: '3rem !important',
      height: '700x !important',
    },
    [theme.breakpoints.up('md')]: {
      height: '950px !important',
    },
  },
  elementGridText: {
    border: '4px solid red !important',
    paddingTop: '1rem',
    paddingBottom: '1rem',
  },
  image: {
    borderColor: 'red !important',
    [theme.breakpoints.down('sm')]: {
      width: '300px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '400px',
      height: '400px',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '700px',
      maxHeight: '700px',
    },
  },
}));

const ContainerHowItWorks = ({ title, subTitle, image, optionCSS }) => {
  const classes = useStyles();

  return (
    <Grid item lg={12} xl={6} className={classes.gridContainerBox}>
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
