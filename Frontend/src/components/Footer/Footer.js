import React from 'react';
import facebook from '../../assets/facebook.png';
import balaton from '../../assets/balaton.png';
import { useHistory } from 'react-router-dom';
import '../../styles/Footer.css';
import { Translator } from '../index';

export const Footer = () => {
  const history = useHistory();

  const handleContactUs = () => {
    history.push('/contactus');
  };

  const redirectToFacebook = () => {
    window.location.href = 'https://www.facebook.com/Z%C3%B6ldell%C5%91-Apartman-Si%C3%B3fok-100883982263233'
  }
  
  return (
    <div className="footerContainer">
      <div className="footerIconHolder">
      <img onClick={redirectToFacebook} src={facebook} height="40vh" alt="facebook icon"></img>
      </div>
      <div className="footerText">
        {Translator('Zöldellő apartman Siófok', 'Apartment Verdure Siófok')}
      </div>
      <img
        onClick={handleContactUs}
        className="footerBalaton"
        src={balaton}
        height="50%"
        alt="balaton icon"
      ></img>
    </div>
  );
};
