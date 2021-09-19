import React from 'react';
import { useHistory } from 'react-router-dom';
import { HeaderButton } from '../';
import { auth } from '../../firebase';
import { Translator } from '../index';
import { LogoImg } from '../index';

export const HeaderLoggedInDesktop = () => {
    const history = useHistory();

    const handleEvent = () => {
        history.push('/calendar');
      };
  const handleLogOut = () => {
    auth.signOut();
    history.push('/');
  };
  return(
    <div className="navContainerDesktop">
      <LogoImg className="logoImg"/>
        <HeaderButton
          innerText={
            <span>
              <span>
                <span>{Translator('Foglalás hozzáadása', 'Add booking')} </span>
              </span>
            </span>
          }
          onClickEvent={handleEvent}
        />
        <HeaderButton
          innerText={
            <span>
              <span>
                <span>{Translator('Kijelentkezés', 'Log out')}</span>
              </span>
            </span>
          }
          onClickEvent={handleLogOut}
        />
      </div>
  )
}

