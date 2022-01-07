/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ScrollToELement, ScrollToELement2 } from '../common/scroll-to-element';
import StyledButtonWithIcon from '../common/button-with-icon';

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
    How it Works Component 
    <StyledButtonWithIcon>
      Download now
    </StyledButtonWithIcon>
    </div>);
};

export default HowItWorks;
