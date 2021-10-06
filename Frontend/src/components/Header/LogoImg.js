import React, { useRef, useEffect } from 'react';
import logoBottom from '../../assets/logoBottom.png';
import logoMiddle from '../../assets/logoMiddle.png';
import logoTop from '../../assets/logoTop.png';
import logoMobile from '../../assets/logoMobile.png';
import { useHistory } from 'react-router-dom';
import { gsap } from "gsap";

export const LogoImg = ({ className }) => {
  const history = useHistory();
  const logoBottomPart = useRef();
  const logoMiddlePart = useRef();
  const logoTopPart = useRef();

  useEffect(() => {
    gsap.fromTo(logoBottomPart.current, { opacity:0,scale:0}, {delay:5,duration:1,opacity:1,scale:1});
    gsap.fromTo(logoMiddlePart.current, { opacity:0,scale:0,rotation:1440}, {delay:6.2,duration:1,opacity:1,scale:1,rotation:0});
    gsap.fromTo(logoTopPart.current, { y: '-20vh' }, {delay:7.2,duration:3.2,y:'0vh'});
  }, []);

  const handleHome = () => {
    history.push('/');
  };

  if (className === 'logoImg') {
    return (
      <div className="logoImg">
        <div className="logoHolder">
          <img
            ref={logoBottomPart}
            src={logoBottom}
            max-width="70px"
            height="auto"
            alt="logo of apartment verdure"
          ></img>
          <img
            ref={logoMiddlePart}
            src={logoMiddle}
            max-width="70px"
            height="auto"
            alt="logo of apartment verdure"
          ></img>
          <img
            ref={logoTopPart}
            src={logoTop}
            max-width="70px"
            height="auto"
            alt="logo of apartment verdure"
          ></img>
        </div>
      </div>
    );
  } else {
    return (
      <div className={className}>
        <img
          onClick={handleHome}
          src={logoMobile}
          height="auto"
          max-width="70px"
          alt="logo"
        ></img>
      </div>
    );
  }
};
