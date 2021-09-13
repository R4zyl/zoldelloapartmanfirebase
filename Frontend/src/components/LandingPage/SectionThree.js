import React from 'react';
import { Translator,GoogleMap } from '../index';
import { useHistory } from 'react-router-dom';
import landingImg from '../../assets/galleryImages/s15.JPG';
import landingImg2 from '../../assets/galleryImages/s16.JPG';

export const SectionThree = () => {
  const history = useHistory();

  const handleGallery = () => {
    history.push('/gallery');
  };
  const handleContactus = () => {
    history.push('/contactus');
  };

  return (
    <div>
      <div className="landingContainer3">
        <div className="landingText3" onClick={handleContactus}>
          {Translator(
            'Apartmanházunk lehetőséget nyújt nagy társaságok (akár 18 fő) befogadására, de a szintek külön is kényelmesen szeparálhatók társaságok, családok között. A közelben, 200 méteren belül reggeliző helyek, kávézók és non-stop üzletek találhatók. A ház kertjében parkolási lehetőség van.',
            'Our apartment is great for big group of people (up to 18 persons), but the floors can be conveniently seperated between families or group of friends. There are many great brunch and coffee places nearby, and even some non-stop stores. The house also has parking spots in the garden.'
          )}
        </div>
        <div className="landingImgContainer3">
          <img
            onClick={handleGallery}
            src={landingImg}
            alt="vmi"
            height="240px"
          ></img>
          <img
            onClick={handleGallery}
            src={landingImg2}
            alt="vmi"
            height="240px"
          ></img>
        </div>
      </div>
      <GoogleMap className="mapholder2" width="428" height="250" />
    </div>
  );
};
