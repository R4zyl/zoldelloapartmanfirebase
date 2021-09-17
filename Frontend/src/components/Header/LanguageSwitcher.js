import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import engImg from '../../assets/eng.png';
import hunImg from '../../assets/hun.png';
import {
  changeLanguageToEngAction,
  changeLanguageToHunAction,
} from '../../actions';

export const LanguageSwitcher = ({ height, className }) => {
  const { language } = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const [flagStyle, setFlagStyle] = useState({
    filter: 'grayscale(1) brightness(99%)',
    transition: 'filter 0.5s ease-in-out',
  });

  const handleEngClick = () => {
    dispatch(changeLanguageToEngAction());
    setFlagStyle(marked);
  };
  const handleHunClick = () => {
    dispatch(changeLanguageToHunAction());
    setFlagStyle(marked);
  };
  const handleMouseEnter = () => {
    setFlagStyle(hovered);
  };

  const handleMouseLeave = () => {
    setFlagStyle(marked);
  };

  const marked = {
    filter: 'grayscale(1) brightness(70%)',
    transition: 'filter 0.7s ease-in-out',
  };
  const hovered = {
    filter: 'grayscale(0.2) brightness(94%)',
  };
  return (
    <div>
      {language === 'hun' ? (
        <div>
          <img
            className={className}
            src={hunImg}
            onClick={handleHunClick}
            height={height}
            alt="switch language to hungarian"
          ></img>
          <img
            className={className}
            src={engImg}
            onClick={handleEngClick}
            height={height}
            style={flagStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            alt="váltás angol nyelvre"
          ></img>
        </div>
      ) : (
        <div>
          <img
            className={className}
            src={hunImg}
            onClick={handleHunClick}
            height={height}
            style={flagStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            alt="switch language to hungarian"
          ></img>
          <img
            className={className}
            src={engImg}
            onClick={handleEngClick}
            height={height}
            alt="váltás angol nyelvre"
          ></img>
        </div>
      )}
    </div>
  );
};
