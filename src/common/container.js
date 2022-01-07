import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import theme from './theme';

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 'none',
    paddingLeft: '8.75rem !important',
    paddingRight: '8.75rem !important',
    marginLeft: '0 !important',
    marginRight: '0 !important',
    minWidth: '100% !important',
    backgroundColor: theme.palette.ternary.main,
    [theme.breakpoints.down('lg')]: {
      minWidth: '100% !important',
      paddingRight: '2.5rem !important',
      paddingLeft: '2.5rem !important',
    },
    [theme.breakpoints.down('md')]: {
      minWidth: '100% !important',
      paddingRight: '1.5rem !important',
      paddingLeft: '1.5rem !important',
    },
  },
}));

const StyledContainer = ({children}) => {
  const classes = useStyles();

  // eslint-disable-next-line react/jsx-pascal-case
  return <Container className={classes.container}>{children}</Container>;
};

export default StyledContainer;
