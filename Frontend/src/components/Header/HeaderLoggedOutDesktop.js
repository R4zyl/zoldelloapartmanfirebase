import React from 'react';
import { useHistory } from 'react-router-dom';
import { HeaderButton } from '../';
import logoImg from '../../assets/logo.png';
import { Translator } from '../index';

export const HeaderLoggedOutDesktop = () => {
  const history = useHistory();
  const handlePrices = () => {
    history.push('/prices');
  };

  const handleGallery = () => {
    history.push('/gallery');
  };

  const handleHome = () => {
    history.push('/');
  };

  const handleContactus = () => {
    history.push('/contactus');
  };

  const handleCalendar = () => {
    history.push('/calendar');
  };

  return (
    <div className="navContainerDesktop">
      <div className="logoImg">
        <img
          onClick={handleHome}
          src={logoImg}
          height="auto"
          max-width="70px"
          alt="logo"
        ></img>
      </div>
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
