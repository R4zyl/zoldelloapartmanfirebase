import React from 'react';
import emailicon from '../../assets/emailicon.png';
import phoneicon from '../../assets/phoneicon.png';
import addressicon from '../../assets/addressicon.png';
import { Translator, GoogleMap } from '../index';

export const ContactDetails = () => {
  return (
    <div className="contactInfoContainer">
      <div className="contactInfoTitle">
        {Translator('Ahol elérhetsz minket', 'Where you can reach us')}
      </div>
      <div className="contactUnderTitle">
        {Translator(
          'Keress minket bátran, amennyiben kérdésed lenne, vagy szállást szeretnél foglalni!',
          'Feel free to contact us, if you have any questions, or if you want to book your stay!'
        )}
      </div>
      <div className="contactEmail">
        <img src={emailicon} alt="icon of a mail" height="40px"></img>
        temesi.szabolcs@gmail.com
      </div>
      <div className="contactPhoneNumber">
        <img src={phoneicon} alt="icon of a phone" height="40px"></img>+36 30
        325 1661
      </div>
      <div className="contactAddress">
        <img src={addressicon} alt="icon of address" height="40px"></img>
        {Translator(
          '8600, Siófok, Mátyás király u. 4/A',
          'Mátyás király street 4/A., Siófok, 8600'
        )}
      </div>
      <GoogleMap className="mapholder" width="360" height="270" />
    </div>
  );
};
