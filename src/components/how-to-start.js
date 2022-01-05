/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ScrollToELement, ScrollToELement2 } from '../common/scroll-to-element';

const HowToStart = ({ value }) => {
  const myRef = React.createRef();
  const offsetCalcul = ScrollToELement();

  useEffect(() => {
    if (value === 3) {
      ScrollToELement2(myRef.current.offsetTop - offsetCalcul);
    }
  }, [value]);
  return <div ref={myRef}>How To Start Component</div>;
};

export default HowToStart;
