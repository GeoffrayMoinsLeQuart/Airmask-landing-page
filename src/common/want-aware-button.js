import { makeStyles } from '@mui/styles';
import {
  Button,
  TextField,
  InputAdornment,
  Box,
  useMediaQuery,
  Typography,
  Grid,
  useTheme,
} from '@mui/material';

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: theme.palette.secondary.main,
    width: '100%',
    height: '8.875rem',
    borderRadius: '7.0625rem',
    marginBottom: '2rem',
    [theme.breakpoints.down('md')]: { height: '11rem', borderRadius: '1rem' },
  },
  gridTypography: {
    [theme.breakpoints.up('md')]: {
      marginTop: 'auto !important',
      marginBottom: 'auto !important',
      paddingLeft: '3.125rem',
    },
  },
  gridTextField: {
    paddingRight: '3.125rem',
    [theme.breakpoints.down('md')]: {
      paddingRight: '0.625rem',
      paddingLeft: '0.625rem',
    },
    [theme.breakpoints.up('md')]: {
      paddingRight: '3.125rem',
    },
  },
  textField: {
    backgroundColor: theme.palette.primary.main,
    width: '24.6875rem',
    borderRadius: '2.1875rem',
    '& .MuiOutlinedInput-root': {
      paddingRight: '10px',
      height: '3.7325rem',
      '&.Mui-focused fieldset': {
        border: 'none',
      },
    },
    [theme.breakpoints.down('md')]: { width: '100%' },
  },
  button: {
    backgroundColor: theme.palette.secondary.main + ' !important',
    width: '9.9206rem',
    height: '3.1994rem',
    borderRadius: '2.5rem !important',
    [theme.breakpoints.down('sm')]: { width: '6.875rem' },
  },
}));

const WantAwareButton = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesBelowXL = useMediaQuery(theme.breakpoints.down('xl'));
  const matchesBelowLG = useMediaQuery(theme.breakpoints.down('lg'));
  const matchesBelowMD = useMediaQuery(theme.breakpoints.down('md'));

  function ResponsiveTypography({children}) {
    // This is equivalent to theme.breakpoints.down("md")
    const typographyProps = {
      align: matchesBelowLG ? 'center' : 'left',
      variant:matchesBelowMD ? 'h5' : matchesBelowXL ? 'h3' : 'h2'
    };
    return <Typography {...typographyProps}>{children}</Typography>;
  }

  return (
    <Box className={classes.box}>
      <Grid
        container
        direction={{
          xs: 'column',
          sm: 'column',
          md: 'row',
          lg: 'row',
          xl: 'row',
          xxl: 'row',
        }}
        justifyContent={{
          xs: 'space-around',
          sm: 'space-around',
          md: 'space-between',
          lg: 'space-between',
          xl: 'space-around',
          xxl: 'space-around',
        }}
        alignContent="center"
        sx={{
          height: '100%',
        }}
      >
        <Grid item sx={{}} className={classes.gridTypography}>
          <ResponsiveTypography>
            Want to be aware of all the updates?
          </ResponsiveTypography>
        </Grid>

        <Grid item className={classes.gridTextField}>
          <TextField
            className={classes.textField}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button edge="end" color="primary" className={classes.button}>
                    <Typography variant="subtitle1">Subscribe</Typography>
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default WantAwareButton;
