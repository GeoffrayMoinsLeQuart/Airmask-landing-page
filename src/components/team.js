/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ScrollToELement, ScrollToELement2 } from '../common/scroll-to-element';

const Team = ({ value }) => {
  const myRef = React.createRef();
  const offsetCalcul = ScrollToELement();

  useEffect(() => {
    if (value === 2) {
      ScrollToELement2(myRef.current.offsetTop - offsetCalcul);
    }
  }, [value]);
  return <div ref={myRef}>Team Component</div>;
};

export default Team;
