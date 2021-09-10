import React from 'react';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';
import { Item } from 'react-photoswipe-gallery';

export const GalleryItems = (imgsource) => {
  return (
    <Item original={imgsource} thumbnail={imgsource} width="1920" height="1080">
      {({ ref, open }) => (
        <div className="imgContainer">
          <div className="bottomImg">
            <img
              ref={ref}
              onClick={open}
              alt="thumbnail"
              src={imgsource}
              width="100%"
              height="auto"
            />
          </div>
        </div>
      )}
    </Item>
  );
};
