import React, {useRef,useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { HeaderButton } from '../';
import { Translator } from '../index';
import { LogoImg } from '../index';
import { gsap } from "gsap";

export const HeaderLoggedOutDesktop = () => {
  const history = useHistory();
  const sideHeaderRef= useRef();
  const handlePrices = () => {
    history.push('/prices');
  };

  const handleGallery = () => {
    history.push('/gallery');
  };

  const handleContactus = () => {
    history.push('/contactus');
  };

  const handleCalendar = () => {
    history.push('/calendar');
  };
  useEffect(() => {
    gsap.fromTo(sideHeaderRef.current, { x: '-80vw' }, {delay:1.35,duration:1.5,x:'-30vw'});
  }, []);
  return (
    <div className="navContainerDesktop" ref={sideHeaderRef}>
      <LogoImg className="logoImg"/>
      <HeaderButton
        data-testid="0003"
        innerText={
          <span>
            <span>
              <span>{Translator('Galéria', 'Gallery')}</span>
            </span>
          </span>
        }
        onClickEvent={handleGallery}
      />
      <HeaderButton
        innerText={
          <span>
            <span>
              <span>{Translator('Áraink', 'Prices')}</span>
            </span>
          </span>
        }
        onClickEvent={handlePrices}
      />
      <HeaderButton
        innerText={
          <span>
            <span>
              <span>{Translator('Elérhetőség', 'Contact us')}</span>
            </span>
          </span>
        }
        onClickEvent={handleContactus}
      />
      <HeaderButton
        innerText={
          <span>
            <span>
              <span>{Translator('Foglalható dátumok', 'Dates available')}</span>
            </span>
          </span>
        }
        onClickEvent={handleCalendar}
      />
    </div>
  );
};
