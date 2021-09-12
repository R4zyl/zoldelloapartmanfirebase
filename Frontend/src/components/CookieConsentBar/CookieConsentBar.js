import React from 'react';
import { Translator } from '../index';
import CookieConsent from 'react-cookie-consent';
import '../../styles/CookieConsentBar.css';

export const CookieConsentBar = () => {
  return (
    <CookieConsent>
      {Translator(
        'Ez a webhely sütiket használ a felhasználói élmény javítására.',
        'This website uses cookies to enhance the user experience.'
      )}
    </CookieConsent>
  );
};
