import {  Grid, Box,  Typography, useMediaQuery } from '@mui/material';
import theme from '../../common/theme';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  ball: {
    backgroundColor: 'white',
    width: '1.2rem',
    height: '1.2rem',
    borderRadius: '50%',
  },
  gridSize: {
    height: 'calc(100% - 4rem) !important',
  },
  line: {
    backgroundColor: 'none',
    width: '0rem',
    borderLeft: '0.1rem dotted white',
    borderRight: '0.1rem dotted white',
    borderTop: '0',
    borderBottom: '0',
    height: '100%',
  },
  titleTimelineElement: {
  },
}));

const steps = [
  {
    label: 'Download AirMask',
    description: `Do it in a couple of clicks by downloading Airmask from the link and creating an account.`,
  },
  {
    label: 'Buy tokens',
    description:
      'Start with small purchases. Get RMSK tokens at 25 cents apiece.',
  },
  {
    label: 'Exchange cryptocurrency',
    description: `We offer to exchange for popular crypto at the best rates`,
  },
];

const GridHowToStart = () => {
  const classes = useStyles();
  const matchesBelowMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      {steps.map((step, index) => (
        <Grid container direction="row" key={index + step.label} sx={{marginBottom: '1rem'}}>
          <Grid item xs={1}>
            <Grid
              container
              direction="column"
              alignContent="flex-start"
              sx={{ height: '100% !important' }}
            >
              <Grid item sx={{ height: '10% !important' }}></Grid>
              <Grid item sx={{ height: '20% !important' }}>
                <Box className={classes.ball} />
              </Grid>
              <Grid item sx={{ height: '10% !important' }}></Grid>
              <Grid item sx={{ height: '60% !important' }}>
                <Grid
                  container
                  justifyContent="center"
                  sx={{ height: '100% !important' }}
                >
                  <Grid item sx={{ height: '100% !important' }}>
                    <Box
                      className={classes.line}
                      sx={{ height: '100% !important' }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              {index === steps.length && (
                <Grid item sx={{ height: '10% !important' }}></Grid>
              )}
            </Grid>
          </Grid>
          <Grid item xs={1}>
          </Grid>
          <Grid item xs={10}>
            <Typography
              variant={matchesBelowMD ? 'h2Mobile' : 'h2'}
              className={classes.titleTimelineElement}
            >
              {step.label}
            </Typography>
            <Typography
              variant='h4'
              className={classes.textTimelineElement}
            >
              {step.description}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default GridHowToStart;
