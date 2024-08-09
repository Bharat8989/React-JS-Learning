import React from 'react';
import NetflixSeries, { Footer } from './components/NetflixSeries';

const App = () => {
  return (
    <React.Fragment>
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <Footer/>
    </React.Fragment>
  );
};


export default App;
