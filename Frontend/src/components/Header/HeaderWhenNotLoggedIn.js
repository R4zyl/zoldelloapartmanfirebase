import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderButton } from '../';
import {
  unloadErrorAction,
  changeLanguageToEngAction,
  changeLanguageToHunAction,
} from '../../actions';
import { Translator } from '../index';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import '../../styles/Header.css';
import menuImg from '../../assets/menu.png';
import engImg from '../../assets/eng.png';
import hunImg from '../../assets/hun.png';
import logoImg from '../../assets/logo.png';
import logoMobile from '../../assets/logoMobile.png';
import phoneIconDesktop from '../../assets/phoneIconDesktop.png';

export function HeaderWhenNotLoggedIn() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const { language } = useSelector((state) => state.language);

  const handlePrices = () => {
    dispatch(unloadErrorAction());
    history.push('/prices');
  };

  const handleGallery = () => {
    dispatch(unloadErrorAction());
    history.push('/gallery');
  };

  const handleHome = () => {
    dispatch(unloadErrorAction());
    history.push('/');
  };

  const handleContactus = () => {
    dispatch(unloadErrorAction());
    history.push('/contactus');
  };

  const handleCalendar = () => {
    dispatch(unloadErrorAction());
    history.push('/calendar');
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleEngClick = () => {
    dispatch(changeLanguageToEngAction());
  };
  const handleHunClick = () => {
    dispatch(changeLanguageToHunAction());
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header">
      <div className="navContainer">
        <Button
          className="menuButton"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <img className="menuImg" src={menuImg} alt="open menu"></img>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <div className="navholder">
            <MenuItem onClick={handleClose}>
              <HeaderButton innerText="Home" onClickEvent={handleHome} />
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <HeaderButton
                innerText={Translator('Galéria', 'Gallery')}
                onClickEvent={handleGallery}
              />
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <HeaderButton
                innerText={Translator('Áraink', 'Prices')}
                onClickEvent={handlePrices}
              />
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <HeaderButton
                innerText={Translator('Elérhetőség', 'Contact us')}
                onClickEvent={handleContactus}
              />
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <HeaderButton
                innerText={Translator('Foglalható dátumok', 'Dates available')}
                onClickEvent={handleCalendar}
              />
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <HeaderButton />
              {language === 'hun' ? (
                <img
                  className="languageImg"
                  src={engImg}
                  onClick={handleEngClick}
                  height="50px"
                  alt="váltás magyar nyelvre"
                ></img>
              ) : (
                <img
                  className="languageImg"
                  src={hunImg}
                  onClick={handleHunClick}
                  height="50px"
                  alt="switch language to english"
                ></img>
              )}
            </MenuItem>
          </div>
        </Menu>
      </div>
      <div className="mobileLogoImg">
        <img
          onClick={handleHome}
          src={logoMobile}
          height="auto"
          max-width="70px"
          alt="logo"
        ></img>
      </div>
      <div className="navContainerDesktop">
      <div className="logoImg">
        <img
          onClick={handleHome}
          src={logoImg}
          height="auto"
          max-width="70px"
          alt="logo"
        ></img>
      </div>
        <HeaderButton
          innerText={
            <span>
              <span>
                <span>{Translator('Galéria', 'Gallery')}</span>
              </span>
            </span>
          }
          onClickEvent={handleGallery}
        />
        <HeaderButton
          innerText={
            <span>
              <span>
                <span>{Translator('Áraink', 'Prices')}</span>
              </span>
            </span>
          }
          onClickEvent={handlePrices}
        />
        <HeaderButton
          innerText={
            <span>
              <span>
                <span>{Translator('Elérhetőség', 'Contact us')}</span>
              </span>
            </span>
          }
          onClickEvent={handleContactus}
        />
        <HeaderButton
          innerText={
            <span>
              <span>
                <span>
                  {Translator('Foglalható dátumok', 'Dates available')}
                </span>
              </span>
            </span>
          }
          onClickEvent={handleCalendar}
        />
      </div>
      {language === 'hun' ? (
        <img
          className="languageImgDesktop"
          src={engImg}
          onClick={handleEngClick}
          height="35px"
          alt="váltás magyar nyelvre"
        ></img>
      ) : (
        <img
          className="languageImgDesktop"
          src={hunImg}
          onClick={handleHunClick}
          height="35px"
          alt="switch language to english"
        ></img>
      )}
      <div className="contactIconsHolder"><div className="phoneNumberDesktop">+36 30 325 1661</div><img src={phoneIconDesktop} height="32px" alt="phone number icon"></img></div>
    </div>
    
  );
}
