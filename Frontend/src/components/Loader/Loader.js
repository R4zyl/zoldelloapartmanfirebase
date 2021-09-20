import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import '../../styles/Loader.css';

export function Loader() {
  return (
    <div className="loaderContainer">
      <CircularProgress color="success" />
    </div>
  );
}
