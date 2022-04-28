import React from 'react';
import { InfoSection } from '../../components';
import { homeObjOne, homeObjTwo } from './Data';
import Tabledata from './datefilter';
import Grid from './apidata';
import Fraction from './yolo';
import App from './cell_render/App'

function FHAD() {
  return (
    <>
      <InfoSection {...homeObjTwo} />
      <br></br>
      <Tabledata />
      <br />
      <br />
      <Grid />
      <br />
      <br />
      <Fraction />
      <br />
      <br />
      <App />
      <InfoSection {...homeObjOne} />

    </>
  );
}

export default FHAD;
