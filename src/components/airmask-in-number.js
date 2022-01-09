/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ScrollToELement, ScrollToELement2 } from '../common/scroll-to-element';
import Button from '@mui/material/Button';

const AirmaskInNumber = ({ value }) => {
  const myRef = React.createRef();
  const offsetCalcul = ScrollToELement();

  useEffect(() => {
    if (value === 1) {
      ScrollToELement2(myRef.current.offsetTop - offsetCalcul);
    }
  }, [value]);

  return (
    <>
      <div ref={myRef}>Airmask In Number Component</div>
      <Button color="secondary" sx={{ backgroundColor: 'red' }}>
        mlsdfghdshgmeds
      </Button>
      <button >
        mlsdfghdshgmeds
      </button>
    </>
  );
};

export default AirmaskInNumber;
