import React from 'react';
import { useHistory } from 'react-router-dom';
import { HeaderButton } from '../';
import { Translator,LanguageSwitcher, HeaderLoggedOutDesktop } from '../index';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import '../../styles/Header.css';
import menuImg from '../../assets/menu.png';
import phoneIconDesktop from '../../assets/phoneIconDesktop.png';
import { LogoImg } from '../index';

export function HeaderWhenNotLoggedIn() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();

  const handlePrices = () => {
    history.push('/prices');
  };

  const handleGallery = () => {
    history.push('/gallery');
  };

  const handleHome = () => {
    history.push('/');
  };

  const handleContactus = () => {
    history.push('/contactus');
  };

  const handleCalendar = () => {
    history.push('/calendar');
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
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
              <HeaderButton 
              />
              <LanguageSwitcher height="40px" className="languageImg" />
            </MenuItem>
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
                innerText={Translator('Foglalható dátumok', 'Dates available')}
                onClickEvent={handleCalendar}
              />
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <HeaderButton
                innerText={Translator('Elérhetőség', 'Contact us')}
                onClickEvent={handleContactus}
              />
            </MenuItem>
          </div>
        </Menu>
      </div>
      <LogoImg className="mobileLogoImg"/>
      <HeaderLoggedOutDesktop />
      <LanguageSwitcher height="35px" className="languageImgDesktop" />
      <div className="contactIconsHolder"><div className="phoneNumberDesktop">+36 30 325 1661</div><img src={phoneIconDesktop} height="32px" alt="phone number icon"></img></div>
    </div>
    
  );
}
