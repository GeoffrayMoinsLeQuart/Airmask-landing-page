import React from 'react';
import { Grid, Button, Link, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import logo from '../assets/logos/logo.svg';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from '../common/theme';
import MediaIcons from '../common/media-icons';

const useStyles = makeStyles((theme) => ({
  footer: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.ternary.main,
    paddingBottom: '5rem',
    paddingTop: '10.3925rem',
    paddingLeft: '8.75rem',
    paddingRight: '8.75rem',
    [theme.breakpoints.down('lg')]: {
      paddingBottom: '5rem',
      paddingTop: '10.3925rem',
      paddingRight: '2.5rem',
      paddingLeft: '2.5rem',
    },
    [theme.breakpoints.down('md')]: {
      minWidth: '100% !important',
      paddingTop: '7.8681rem',
      paddingBottom: '2rem',
      paddingRight: '1.25rem',
      paddingLeft: '1.25rem',
    },
  },
  buttonLogo: {
    backgroundColor: 'transparent !important',
    padding: '0 !important',
  },
  logo: {
    [theme.breakpoints.up('md')]: {
      height: '4rem',
      marginBottom: 'auto',
    },
    [theme.breakpoints.down('md')]: { height: '3rem', marginBottom: '2.5rem' },
    [theme.breakpoints.down('sm')]: { height: '2.5rem' },
  },
  secondLine: {
    [theme.breakpoints.up('md')]: {
      marginTop: '3.4688rem',
    },
  },
  gridStyledLink: {
    [theme.breakpoints.down('md')]: { marginBottom: '0.5625rem !important' },
    marginBottom: '1.75rem !important',
  },
}));

const Footer = ({setValue}) => {
  const classes = useStyles();


  const designGrid= {
    xs: 'center',
    sm: 'center',
    md: 'flex-start',
    lg: 'flex-start',
    xl: 'flex-start',
  }

  let themeTypoOver = createTheme();
  themeTypoOver.typography.overline = {
    ...theme.typography.overline,
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
    },
  };
  
  let themeTypoSubtitle = createTheme();
    themeTypoSubtitle.typography.subtitle1 = {
      ...theme.typography.subtitle1,
      [theme.breakpoints.down('md')]: {
        fontSize: '0.75rem',
      },
    };

  const handleClickMenu = () => {
    setValue('Home');
  };

  const StyledLink = ({ nameLink, value, type }) => {
    return (
      <Grid
        item
        className={
          type === 'overline'
            ? classes.gridStyledLink
            : classes.gridStyledLinkLast
        }
      >
        <ThemeProvider theme={themeTypoOver}>
          <Button
            disableRipple
            onClick={() => (Number.isInteger(value) ? setValue(value) : false)}
            sx={{
              color: theme.palette.primary.main,
              '&:hover': {
                opacity: 0.7,
              },
              textTransform: 'none',
            }}
          >
            <Typography  variant={type}>
              {nameLink}
            </Typography>
          </Button>
        </ThemeProvider>
      </Grid>
    );
  };

  return (
    <footer className={classes.footer}>
      <Grid container justifyContent="space-between">
        <Grid container justifyContent="space-between">
          <Grid container item xs={12} md={6} justifyContent={designGrid}>
            <Button
              component={Link}
              disableRipple
              style={{ backgroundColor: 'transparent', padding: 0 }} // no hover style
              onClick={handleClickMenu}
            >
              <img alt="companylogo" src={logo} className={classes.logo} />
            </Button>
          </Grid>

          <Grid
            container
            item
            sm={12}
            md={3}
            direction="column"
            alignItems={designGrid}
          >
            <StyledLink type="overline" nameLink="How it works" value={0} />
            <StyledLink
              type="overline"
              nameLink="Airmask in numbers"
              value={1}
            />
            <StyledLink type="overline" nameLink="Team" value={2} />
          </Grid>

          <Grid
            container
            item
            sm={12}
            md={3}
            direction="column"
            alignItems={designGrid}
          >
            <StyledLink type="overline" nameLink="How to start?" value={3} />
            <StyledLink type="overline" nameLink="FAQ" value={4} />
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent="space-between"
          className={classes.secondLine}
        >
          <Grid
            container
            item
            xs={12}
            md={6}
            alignItems="center"
            justifyContent={designGrid}
            order={{ xs: 2, sm: 2, md: 1 }}
          >
            <ThemeProvider theme={themeTypoSubtitle}>
              <Typography variant="subtitle1" sx={{ opacity: 0.6 }}>
                Copyright Ⓒ 2020 Airmask. All Rights Reserved
              </Typography>
            </ThemeProvider>
          </Grid>

          <MediaIcons designGrid={designGrid} order={{ xs: 1, sm: 1, md: 2 }} />

          <Grid
            container
            item
            sm={12}
            md={3}
            alignItems="center"
            justifyContent={designGrid}
            order={{ xs: 3, sm: 3, md: 3 }}
          >
            <StyledLink type="subtitle1" nameLink="Privacy" />
            <StyledLink type="subtitle1" nameLink="Terms & Conditions" />
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
