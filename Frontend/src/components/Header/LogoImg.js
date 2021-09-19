import React from 'react';
import logoImg from '../../assets/logo.png';
import logoMobile from '../../assets/logoMobile.png';
import { useHistory } from 'react-router-dom';

export const LogoImg = ({className}) => {
  const history = useHistory();

  const handleHome = () => {
    history.push('/');
  };

  return (
    <div className={className}>
      <img
        onClick={handleHome}
        src={className==='logoImg'?logoImg:logoMobile}
        height="auto"
        max-width="70px"
        alt="logo"
      ></img>
    </div>
  );
};
