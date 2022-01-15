/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from 'react';
import { Button, Menu, MenuItem, Typography, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import useMediaQuery from '@mui/material/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: 'transparent !important',
    color: theme.palette.primary.main + ' !important',
    width: '11.5rem',
    textTransform: 'none !important',
    borderRadius: 0,
    '&:hover': {
      opacity: '0.7',
    },
  },
  menu: {
    width: '14rem',
    '&.MuiPaper-root': {
      backgroundColor: theme.palette.ternary.main + ' !important',
      color: theme.palette.primary.main + ' !important',
    },
    borderRadius: 0,
  },
  menuItem: {
    color: theme.palette.primary.main + ' !important',
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
}));

const MenuItems = ({ tabsNames, onChange }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();
  const theme = useTheme();
  const matchesBelowMD = useMediaQuery(theme.breakpoints.down('md'));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    onChange(i);
  };

  return (
    <>
      <Button
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        className={classes.button}
      >
        <Typography variant="h3">Discover us</Typography>
      </Button>
      <Menu
        id="demo-customized-menu"
        // className={classes.menu}
        classes={{ paper: classes.menu }}
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {tabsNames.map((tabsName, index) => (
          <MenuItem
            key={`${tabsName}${index}`}
            onClick={handleClose}
            disableRipple
            className={classes.menuItem}
            onClick={(event) => {
              handleMenuItemClick(event, index);
              handleClose();
            }}
          >
            <Typography
              variant={matchesBelowMD ? 'body1' : 'h4'}
              align="center"
              sx={{ color: 'white' }}
            >
              {tabsName}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default MenuItems;
