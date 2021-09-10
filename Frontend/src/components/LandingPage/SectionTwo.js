import React from 'react';
import { Translator } from '../index';
import { useHistory } from 'react-router-dom';
import landingGarden from '../../assets/galleryImages/s3.JPG';
import landingGarden2 from '../../assets/galleryImages/s4.JPG';

export const SectionTwo = () => {
  const history = useHistory();

  const handleGallery = () => {
    history.push('/gallery');
  };

  return (
    <div id="sectionTwo" className="landingContainer2">
      <div className="landingText2">
        {Translator(
          'A házban hat darab 2,3 és 4 ágyas klimatizált szoba, közös helységek, négy fürdőszoba két konyha, négy nagy terasz található. A ház kertkapcsolatos, így az teret ad grillezésre, bográcsozásra, napozásra.',
          'The house has climatised rooms with 2,3 and 4 beds, common public rooms, 4 seperate bathrooms, 2 kitchens and 4 big terraces. The house has a garden which you can use to grill some food, or sunbathe.'
        )}
      </div>
      <div className="landingImgContainer2">
        <img
          onClick={handleGallery}
          className="gardenImg2"
          src={landingGarden2}
          alt="garden with acoomodities"
          height="240px"
        ></img>
        <img
          onClick={handleGallery}
          className="gardenImg"
          src={landingGarden}
          alt="garden with accomodities"
          height="240px"
        ></img>
      </div>
    </div>
  );
};
