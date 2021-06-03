import React, { useState, useEffect } from 'react';
import PacmanLoader from "react-spinners/PacmanLoader";
import ClockLoader from "react-spinners/ClockLoader";
import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
`;

  return isLoading ?
    <PacmanLoader color={'#36D7B7'} isLoading={isLoading} css={override} size={150} /> :
    <h1 className="App">
      This is Main Page
      {<ClockLoader color={'#36D7B7'} isLoading={isLoading} css={override} size={150} />}
    </h1>
}

export default App;
