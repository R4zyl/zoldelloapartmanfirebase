import React from 'react';
import { Translator } from '../index';
import { useHistory } from 'react-router-dom';
import siofok from '../../assets/siofok.JPG';
import {Link} from 'react-scroll'

export const SectionOne = () => {
  const history = useHistory();

  const handleGallery = () => {
    history.push('/gallery');
  };

  return (
    <div className="landingContainer">
      <div className="landingTextBox">
        <div className="landingTitle">
          <div className="landingTitleFirst">
            {Translator('Zöldellő', 'Verdure')}
          </div>
          {Translator('Apartman Siófok', 'Apartment Siófok')}
        </div>
        <div className="landingText">
          {Translator(
            `A legjobb helyen, 150 méterre a Balaton aranypartjától és az éjszakai élet központjától, a Petőfi sétánytól, mégis zöld, nyugodt és csendes övezetben.`,`Our apartment is on the best spot, 150 meters away from the „golden beach” of lake Balaton, and from the center of the city’s night life Petőfi street, but it is still in a green, calm and quiet area.`
          )}
          <Link  to="sectionTwo" spy={true} smooth={true}><button>{Translator('Bővebben', 'More about us')}</button></Link>
        </div>
      </div>
      <div className="landingImg">
        <img
          onClick={handleGallery}
          className="landingImg"
          src={siofok}
          alt={Translator(
            'Zöldellő Apartman Siófok',
            'Apartment Verdure Siófok'
          )}
        ></img>
      </div>
    </div>
  );
};
