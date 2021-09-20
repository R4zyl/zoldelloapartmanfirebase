import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import menuImg from '../../assets/menu.png';
import { Translator,LanguageSwitcher, HeaderButton } from '../index';

export  function MobileMenu() {
  const [state, setState] = React.useState({
    right: false,
  });
  const history = useHistory();

  const handleGallery = () => {
    history.push('/gallery');
  };
  const handlePrices = () => {
    history.push('/prices');
  };

  const handleContactus = () => {
    history.push('/contactus');
  };

  const handleCalendar = () => {
    history.push('/calendar');
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: '60vw'}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="navholder">
           <LanguageSwitcher height="40px" className="languageImg" />
      <HeaderButton
                innerText={Translator('Galéria', 'Gallery')}
                onClickEvent={handleGallery}
              />
        <HeaderButton
                innerText={Translator('Áraink', 'Prices')}
                onClickEvent={handlePrices}
              />
        <HeaderButton
                innerText={Translator('Foglalható dátumok', 'Dates available')}
                onClickEvent={handleCalendar}
              />
        <HeaderButton
                innerText={Translator('Elérhetőség', 'Contact us')}
                onClickEvent={handleContactus}
              />
        </div>
    </Box>
  );

  return (
    <div className ="navContainer">
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><img className="menuImg" src={menuImg} alt="open menu"></img>
        </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
