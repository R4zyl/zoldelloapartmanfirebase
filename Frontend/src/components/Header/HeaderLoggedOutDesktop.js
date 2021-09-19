import React from 'react';
import { useHistory } from 'react-router-dom';
import { HeaderButton } from '../';
import { Translator } from '../index';
import { LogoImg } from '../index';

export const HeaderLoggedOutDesktop = () => {
  const history = useHistory();
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

  return (
    <div className="navContainerDesktop">
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
