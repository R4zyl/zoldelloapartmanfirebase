import React from 'react';
import '../../styles/LandingPage.css';
import { SectionOne, SectionTwo, SectionThree } from '../index';
import { FullPage, Slide } from 'react-full-page';


export const LandingPage = () => {
  return (
    <FullPage controls={false}>
      <Slide>
        <SectionOne />
      </Slide>
      <Slide>
        <SectionTwo />
      </Slide>
      <Slide>
        <SectionThree />
      </Slide>
    </FullPage>
  );
};
