/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { ScrollToELement, ScrollToELement2 } from '../../common/scroll-to-element';
import { makeStyles } from '@mui/styles';
import {
  Accordion,
  useTheme,
  AccordionSummary,
  AccordionDetails,
  Typography,
  useMediaQuery,
} from '@mui/material';
import minus from '../../assets/icons/minus.svg';
import plus from '../../assets/icons/plus.svg';
import ButtonIcon from '../../common/button-icon';
import useIsMobile from '../../common/get-size-screen';

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    [theme.breakpoints.up('xxl')]: {
      paddingTop: '8.5rem',
      paddingBottom: '5.5rem',
      maxWidth: '125rem',
      margin: 'auto',
    },
  },
  accordion: {
    backgroundColor: theme.palette.ternary.main + ' !important',
    paddingBottom: '1.5rem',

    '&.MuiAccordion-root:before': {
      backgroundColor: theme.palette.ternary.main,
    },
    '&.MuiAccordion-root': {
      boxShadow: 'none',
    },
  },
  accordionSummary: {
    paddingRight: '0 !important',
    paddingLeft: '0 !important',
  },
  title: {
    paddingBottom: '2rem !important',
  },
}));

const FAQ = ({ value }) => {
  const [openAccordeon0, setOpenAccordeon0] = useState(false);
  const [openAccordeon1, setOpenAccordeon1] = useState(false);
  const [openAccordeon2, setOpenAccordeon2] = useState(false);
  const [openAccordeon3, setOpenAccordeon3] = useState(false);
  const myRef = React.createRef();
  const offsetCalcul = ScrollToELement();
  const offsetCalcul2 = useIsMobile('faq');

  const theme = useTheme();
  const classes = useStyles();

    const matchesBelowMD = useMediaQuery(theme.breakpoints.down('md'));
    const typographyProps = {
      align: matchesBelowMD ? 'center' : 'left',
    };
  const faqs = [
    {
      label: 'Download AirMask',
      description: `AirMask is your no-hassle gateway to getting airdrop tokens without doing a thing.`,
      description1: `Who doesn’t love Airdrops? Free tokens? Yes, please! But it takes so much work to find the good ones and subscribe. Signing up for airdrops is so ancient.`,
      description2:
        'Enter AirMask – the non-custodial web wallet that does all the work for you, and automatically participates in token and NFT airdrops so that you can receive free tokens and NFT constantly without sweating over it!',
      icon: openAccordeon0,
    },
    {
      label: 'Why sign up for another wallet?',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget.`,
      icon: openAccordeon1,
    },
    {
      label: 'Who are the people behind AirMask?',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget.`,
      icon: openAccordeon2,
    },
    {
      label: 'When will AirMask be available?',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget.`,
      icon: openAccordeon3,
    },
  ];

  useEffect(() => {
    if (value === 4) {
      ScrollToELement2(myRef.current.offsetTop - offsetCalcul + offsetCalcul2);
    }
  }, [value]);

  const handleOnclick = (number) => {
    if (number === 0) {
      setOpenAccordeon0(!openAccordeon0);
    } else if (number === 1) {
      setOpenAccordeon1(!openAccordeon1);
    } else if (number === 2) {
      setOpenAccordeon2(!openAccordeon2);
    } else if (number === 3) {
      setOpenAccordeon3(!openAccordeon3);
    }
  }

  return (
    <div className={classes.mainDiv}>
      <Typography
        {...typographyProps}
        variant={matchesBelowMD ? 'h2' : 'h1'}
        className={classes.title}
      >
        FAQ
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion key={faq.label} ref={myRef} className={classes.accordion}>
          <AccordionSummary
            onClick={() => handleOnclick(index)}
            expandIcon={
              <ButtonIcon
                onClick={() => handleOnclick(index)}
                disableRipple
                marginright="none"
                icon={faq.icon ? minus : plus}
              />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.accordionSummary}
          >
            <Typography variant="h5">{faq.label}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h4">{faq.description}</Typography>
            {faq.description1 && (
              <Typography variant="h4">{faq.description1}</Typography>
            )}
            {faq.description2 && (
              <Typography variant="h4">{faq.description2}</Typography>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default FAQ;
