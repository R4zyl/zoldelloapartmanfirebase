import React, { useRef, useEffect } from 'react';
import { LanguageSwitcher, HeaderLoggedOutDesktop } from '../index';
import '../../styles/Header.css';
import phoneIconDesktop from '../../assets/phoneIconDesktop.png';
import { LogoImg } from '../index';
import { MobileMenu } from '../index';
import { gsap } from 'gsap';

export function HeaderWhenNotLoggedIn() {
  const phoneNumberRef = useRef();
  const phoneIconRef = useRef();
  const handleOnClick = () => {
    navigator.clipboard.writeText('0036303251661');
  };
  useEffect(() => {
    gsap.fromTo(
      phoneNumberRef.current,
      { x: '-80vw' },
      { delay:2,duration: 3, x: '0vw' }
    );
    gsap.fromTo(
      phoneIconRef.current,
      {rotation:720, opacity:1}, {delay:5,repeat:-1,repeatDelay:6,opacity:1, duration:3,rotation:0}
    );
  }, []);
  return (
    <div className="header">
      <MobileMenu />
      <LogoImg className="mobileLogoImg" />
      <HeaderLoggedOutDesktop />
      <LanguageSwitcher height="35px" className="languageImgDesktop" />
      <div ref={phoneNumberRef} className="contactIconsHolder">
        <div
          className="phoneNumberDesktop"
          alt="click to copy phone number"
          onClick={handleOnClick}
        >
          +36 30 325 1661
        </div>
        <img ref={phoneIconRef} src={phoneIconDesktop} height="32px" alt="phone number icon"></img>
      </div>
    </div>
  );
}
