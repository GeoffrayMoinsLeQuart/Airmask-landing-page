import { makeStyles } from '@mui/styles';
import {Button, SvgIcon } from '@mui/material';
import styled from 'styled-components';
import theme from './theme';
import download_icon from '../assets/icons/download.svg'; 


const useStyles = makeStyles((theme) => ({
  icon: {
    backgroundColor: 'red ',
    color: 'black !important',
    [theme.breakpoints.down('lg')]: {},
    [theme.breakpoints.down('md')]: {},
  },
}));


const ButtonDownloadHeader = styled(Button)`
  border-radius: 40px;
  text-transform: none;
  font-weight: 600;
  font-size: 1rem;
  min-width: 10rem;
  height: 3.75rem;
  margin-left: 50px;
  background-color: ${theme.palette.primary.main};
  color: ${theme.palette.secondary.main};
  &:hover {
    background-color: ${theme.palette.secondary.main};
    color: ${theme.palette.primary.main};
  }
  &:focus {
    background-color: ${theme.palette.secondary.opacity60};
    color: ${theme.palette.primary.main};
  }
  & .MuiButton-startIcon {
    background-color: ${theme.palette.secondary.opacity60};
    color: ${theme.palette.secondary.opacity60};
  }
  & img.MuiButton-startIcon {
    background-color: red;
    color: red;
  }
`;

function HomeIcon(props) {
  return <SvgIcon {...props}>{download_icon}</SvgIcon>;
}

const StyledButtonWithIcon = ({ children }) => {
  const classes = useStyles();

  // eslint-disable-next-line react/jsx-pascal-case
  return (
    <ButtonDownloadHeader
      variant="outlined"
      startIcon={<HomeIcon className={classes.icon} fontSize="small" />}
    >
      {children}
    </ButtonDownloadHeader>
  );
};

export default StyledButtonWithIcon;
