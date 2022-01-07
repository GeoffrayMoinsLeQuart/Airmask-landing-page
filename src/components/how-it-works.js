/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ScrollToELement, ScrollToELement2 } from '../common/scroll-to-element';
import StyledButtonWithIcon from '../common/button-with-icon';
import { Typography } from '@mui/material';

const HowItWorks = ({ value }) => {
  const myRef = React.createRef();
  const offsetCalcul = ScrollToELement();

  useEffect(() => {
    if (value === 0) {
      ScrollToELement2(myRef.current.offsetTop - offsetCalcul);
    }
  }, [value]);
  return (
    <div ref={myRef}>
      <Typography variant="h1">How it Works Component</Typography>
      <Typography variant="h2">How it Works Component</Typography>
      <Typography variant="h3">How it Works Component</Typography>
      <Typography variant="h4">How it Works Component</Typography>
      <StyledButtonWithIcon>Download now</StyledButtonWithIcon>
    </div>
  );
};

export default HowItWorks;
