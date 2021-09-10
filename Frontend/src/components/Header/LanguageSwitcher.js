import React from 'react';
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

  const handleEngClick = () => {
    dispatch(changeLanguageToEngAction());
  };
  const handleHunClick = () => {
    dispatch(changeLanguageToHunAction());
  };
          
  return (
     
    <div>
       {language === 'hun' ? (
        <img
          className={className}
          src={engImg}
          onClick={handleEngClick}
          height={height}
          alt="váltás magyar nyelvre"
        ></img>
      ) : (
        <img
        className={className}
          src={hunImg}
          onClick={handleHunClick}
          height={height}
          alt="switch language to english"
        ></img>
      )}
    </div>
  );

};
