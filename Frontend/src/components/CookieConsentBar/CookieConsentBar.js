import React from 'react';
import { Translator } from '../index';
import CookieConsent from 'react-cookie-consent';

export const CookieConsentBar = () => {
  return (
    <CookieConsent buttonText={Translator('Egyetértek','I understand') } style={{ background: "#0a7742ee" } }buttonStyle={{ color: "#0a7742ee",background:"#ffffff", fontSize: "13px" }}>
      {Translator(
        'Ez a webhely sütiket használ a felhasználói élmény javítására.',
        'This website uses cookies to enhance the user experience.'
      )}
    </CookieConsent>
  );
};
