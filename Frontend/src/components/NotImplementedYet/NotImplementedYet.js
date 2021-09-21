import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../styles/NotImplementedYet.css';

export const NotImplementedYet = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/');
  };

  return (
    <div className="notFoundContainer">
        <div className="notFoundTextContainer">
        <h1>404</h1>
        <p title="underTitle">Sorry</p>
        <p title="explainText">This page was not found</p>
        <button type="button" onClick={handleClick}>Go Home!</button>
        </div>
    </div>
  );
};