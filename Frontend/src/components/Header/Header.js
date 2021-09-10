import React from 'react';
import { useSelector } from 'react-redux';
import { HeaderWhenNotLoggedIn, HeaderWhenLoggedIn } from '../';

export const Header = () => {
  const { user } = useSelector((state) => state.userData);

  return user ? <HeaderWhenLoggedIn /> : <HeaderWhenNotLoggedIn />;
};
