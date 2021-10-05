import React, {useRef,useEffect} from 'react';
import { Translator } from '../index';
import { useHistory } from 'react-router-dom';
import siofok from '../../assets/siofok.JPG';
import {Link} from 'react-scroll'
import { gsap } from "gsap";

export const SectionOne = () => {
  const history = useHistory();
  const section1Ref = useRef();
  const section1ImgRef = useRef();
  const handleGallery = () => {
    history.push('/gallery');
  };
  useEffect(() => {
    gsap.fromTo(section1Ref.current, { opacity:0, scale:0,y: '80vh' }, {scale:1,opacity:1,duration:1.5,y:'0vh'});
    gsap.fromTo(section1ImgRef.current, { x: '80vw' }, {delay:0.5,duration:1.5,x:'0vw'});
  }, []);

  return (
    <div className="landingContainer">
      <div ref={section1Ref} className="landingTextBox">
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
      <div ref={section1ImgRef} className="landingImg">
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
