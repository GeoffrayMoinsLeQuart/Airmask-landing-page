import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Tab,
  Tabs,
  Button,
  Link,
  useTheme,
  ListItem,
  ListItemText,
  List,
  SwipeableDrawer,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import styled from 'styled-components';
import useMediaQuery from '@mui/material/useMediaQuery';

import logo from '../../assets/logos/logo.svg';
import theme from '../../common/theme';
import ButtonIcon from '../../common/button-icon';
import download_icon from '../../assets/icons/download.svg'; 
import menu_icon from '../../assets/icons/menu.svg'; 
import close_menu_icon from '../../assets/icons/close_menu.svg'; 
import MediaIcons from '../../common/media-icons';
import MenuItems from './menu-items';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: '1400 !important',
    backgroundColor: theme.palette.ternary.main + ' !important',
    paddingTop: '2.8125rem',
    paddingBottom: '2.8125rem',
    paddingLeft: '8.75rem',
    paddingRight: '8.75rem',
    [theme.breakpoints.down('lg')]: {
      paddingTop: '2rem',
      paddingBottom: '2rem',
      paddingRight: '2.5rem',
      paddingLeft: '2.5rem',
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: '1.25rem',
      paddingBottom: '1.25rem',
      paddingRight: '1.25rem',
      paddingLeft: '1.25rem',
    },
  },
  toolbarMargin: {
    [theme.breakpoints.down('sm')]: { marginBottom: '6rem' },
    [theme.breakpoints.up('sm')]: { marginBottom: '6.5rem' },
    [theme.breakpoints.up('md')]: { marginBottom: '8rem' },
    [theme.breakpoints.up('lg')]: { marginBottom: '9.625rem' },
    marginBottom: '4rem',
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  logo: {
    [theme.breakpoints.up('md')]: {
      height: '4rem',
    },
    [theme.breakpoints.down('md')]: {
      height: '3rem',
    },
    [theme.breakpoints.down('sm')]: { height: '2.5rem' },
  },
  buttonLogo: {
    padding: '0 !important',
    maxWidth: '17rem !important',
    backgroundColor: 'transparent !important',
    justifyContent: 'space-between !important',
    [theme.breakpoints.down('md')]: { paddingLeft: '0 !important' },
    [theme.breakpoints.up('md')]: { paddingRight: '50px !important' },
  },
  drawer: {
    zIndex: 1200,
    backgroundColor: theme.palette.ternary.main + ' !important',
    width: '100%',
  },
  list: {
    marginTop: 'auto !important',
    marginBottom: 'auto !important',
    margin: 'auto !important',
  },
  buttonDownloadHeader: {
    borderRadius: '2.5rem !important',
    textTransform: 'none !important',
    fontWeight: '600 !important',
    fontSize: '1rem !important',
    minWidth: '10rem !important',
    height: '3.75rem !important',
    marginLeft: '50px !important',
    backgroundColor: theme.palette.ternary.opacity10 + ' !important',
    color: theme.palette.primary.main + ' !important',
    '&:hover': {
      backgroundColor: theme.palette.primary.main + ' !important',
      color: theme.palette.ternary.main + ' !important',
    },
    '&:focus': {
      backgroundColor: theme.palette.ternary.opacity60 + ' !important',
      color: theme.palette.ternary.main + ' !important',
    },
  },
  tab: {
    textTransform: 'none  !important',
    fontWeight: 400 + ' !important',
    fontSize: '1rem  !important',
    minWidth: '5rem  !important',
    color: theme.palette.primary.main + ' !important',
    '&:hover': {
      opacity: 0.7,
    },
  },
  tabs: {
    marginRight: '15px',
    marginLeft: '15px',
    '& .MuiTabs-indicator': {
      backgroundColor: 'transparent',
    },
  },
}));

const StyledListItemText = styled(ListItemText)`
  text-transform: none;
  font-weight: 500;
  font-size: 1.375rem;
  min-width: 5rem;
  text-align: center;
  color: ${theme.palette.primary.main};
  &:hover {
    opacity: 0.7;
  }
`;

const ButtonDownloadMobile = styled(Button)`
  border-radius: 2.5rem;
  text-transform: none;
  font-weight: 600;
  font-size: 1rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1.5rem;
  min-width: 15rem;
  height: 3.75rem;
  background-color: ${theme.palette.ternary.opacity10};
  color: ${theme.palette.primary.main};

  &:hover {
    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.ternary.main};
  }
  &:focus {
    background-color: ${theme.palette.ternary.opacity60};
    color: ${theme.palette.ternary.main};
  }
`;


const Header = ({value, setValue}) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const matchesBelowMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesBelowXL = useMediaQuery(theme.breakpoints.down('xl'));
  const matchesBelowHeaderTab = useMediaQuery(
    theme.breakpoints.down('headerTab')
  );
  const iOS =
    typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const tabsNames = [
    'How it works',
    'Airmask in numbers',
    'Team',
    'How to start?',
    'FAQ',
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeButtonMenu = (newValue) => {
    setValue(newValue);
  };

  const handleClickMenu = () => {
    setValue('Home');
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const tabs = (
    <>
      {!matchesBelowHeaderTab && (
        <Tabs
          value={value}
          onChange={handleChange}
          className={classes.tabs}
        >
          {tabsNames &&
            tabsNames.map((tabsName, index) => (
              <Tab
                label={tabsName}
                {...a11yProps(index)}
                key={index}
                selected={value === index + 1}
                disableRipple
                className={classes.tab}
              />
            ))}
        </Tabs>
      )}

      {matchesBelowHeaderTab && (
        <MenuItems tabsNames={tabsNames} onChange={handleChangeButtonMenu} />
      )}

      <MediaIcons
        designGrid={{
          xs: 'center',
          sm: 'center',
          md: 'center',
          lg: 'center',
          xl: 'center',
        }}
      />

      <Button variant="contained" className={classes.buttonDownloadHeader}>
        Download now
      </Button>
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        classes={{ paper: classes.drawer }}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}
        onOpen={() => {
          setOpenDrawer(true);
        }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding className={classes.list}>
          {tabsNames &&
            tabsNames.map((tabsName, index) => (
              <ListItem
                key={tabsName}
                divider
                button
                component={Link}
                onClick={() => {
                  setOpenDrawer(false);
                  setValue(index);
                }}
                sx={{
                  backgroundColor: 'transparent !important',
                }}
                selected={value === index}
              >
                <StyledListItemText
                  disableTypography
                  selected={value === index}

                >
                  {tabsName}
                </StyledListItemText>
              </ListItem>
            ))}
          <MediaIcons
            designGrid={{
              xs: 'center',
              sm: 'center',
              md: 'center',
              lg: 'center',
              xl: 'center',
            }}
          />
        </List>
        <ButtonDownloadMobile variant="contained">
          Download now
        </ButtonDownloadMobile>
      </SwipeableDrawer>
      <ButtonIcon
        onClick={() => {
          setOpenDrawer(!openDrawer);
        }}
        disableRipple
        marginright="none"
        icon={openDrawer ? close_menu_icon : menu_icon}
      />
    </>
  );

  const downloadButtonMobile = (
      <ButtonIcon
        onClick={() => {
          setOpenDrawer(!openDrawer);
        }}
        disableRipple
        marginleft="none"
        icon={download_icon}
      />
  );
  

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar disableGutters className={classes.toolbar}>
            {matchesBelowMD && downloadButtonMobile}

            <Button
              component={Link}
              disableRipple
              className={classes.buttonLogo}
              onClick={handleClickMenu}
            >
              <img alt="companylogo" src={logo} className={classes.logo} />
            </Button>
            {matchesBelowMD ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
