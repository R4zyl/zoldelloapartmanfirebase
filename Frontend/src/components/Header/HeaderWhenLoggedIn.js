import React from 'react';
import { useHistory } from 'react-router-dom';
import { HeaderButton } from '../';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import '../../styles/Header.css';
import menuImg from '../../assets/menu.png';
import { Translator } from '../index';
import { HeaderLoggedInDesktop } from '../index';
import { auth } from '../../firebase';
import { LogoImg } from '../index';

export const HeaderWhenLoggedIn = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();

  const handleLogOut = () => {
    auth.signOut();
    history.push('/');
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleEvent = () => {
    history.push('/calendar');
  };
  <div className="navContainerDesktop">
    <HeaderButton
      innerText={Translator('Foglalás hozzáadása', 'Add booking')}
      onClickEvent={handleEvent}
    />
    <HeaderButton
      innerText={Translator('Kijelentkezés', 'Log out')}
      onClickEvent={handleLogOut}
    />
  </div>;
  return (
    <div className="header">
      <div className="navContainer">
        <Button
          className="menuButton"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <img src={menuImg} alt="open menu"></img>
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
                innerText={Translator('Foglalás hozzáadása', 'Add booking')}
                onClickEvent={handleEvent}
              />
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <HeaderButton
                innerText={Translator('Kijelentkezés', 'Log out')}
                onClickEvent={handleLogOut}
              />
            </MenuItem>
          </div>
        </Menu>
      </div>
      <LogoImg className="mobileLogoImg"/>
      <HeaderLoggedInDesktop />
    </div>
  );
};
