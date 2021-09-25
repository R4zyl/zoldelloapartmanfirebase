import React from 'react';
import { LanguageSwitcher, HeaderLoggedOutDesktop } from '../index';
import '../../styles/Header.css';
import phoneIconDesktop from '../../assets/phoneIconDesktop.png';
import { LogoImg } from '../index';
import { MobileMenu } from '../index';

export function HeaderWhenNotLoggedIn() {
  const handleOnClick = () => {
    navigator.clipboard.writeText('0036303251661')
  }
  return (
    <div className="header">
      <MobileMenu />
      <LogoImg className="mobileLogoImg" />
      <HeaderLoggedOutDesktop />
      <LanguageSwitcher height="35px" className="languageImgDesktop" />
      <div className="contactIconsHolder">
        <div className="phoneNumberDesktop" alt="click to copy phone number" onClick={handleOnClick}>+36 30 325 1661</div>
        <img src={phoneIconDesktop} height="32px" alt="phone number icon"></img>
      </div>
    </div>
  );
}
