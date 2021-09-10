import React from 'react';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import { images } from '../../assets/index.js'
import { lowerImages } from '../../assets/index.js';
import { GalleryItems } from '../index.js'
import '../../styles/MyGallery.css';


export const MyGallery = () => (
  <Gallery>
    <div className="galleryContainer">
    <Item
      original={images[0]}
      thumbnail={images[0]}
      width="1920"
      height="1080"
    >
      {({ ref, open }) => (
        <div className="imgContainer"><div className="bigImg"><img ref={ref} onClick={open} alt="Zöldellő Apartman"src={images[0]} width="100%" height="auto" /></div></div>
      )}
    </Item>
    <div className="smallContainer">
    <Item
      original={images[1]}
      thumbnail={images[1]}
      width="1920"
      height="1080"
    >
      {({ ref, open }) => (
        <div className="imgContainer"><div className="smallImg"><img ref={ref} onClick={open} alt="Zöldellő Apartman"src={images[1]} width="100%" height="auto"/></div></div>
      )}
    </Item>
    <Item
      original={images[2]}
      thumbnail={images[2]}
      width="1920"
      height="1080"
    >
      {({ ref, open }) => (
        <div className="imgContainer"><div className="smallImg2"><img ref={ref} onClick={open} alt="Zöldellő Apartman"src={images[2]} width="100%" height="auto"/></div></div>
      )}
    </Item>
    <Item
      original={images[3]}
      thumbnail={images[3]}
      width="1920"
      height="1080"
    >
      {({ ref, open }) => (
        <div className="imgContainer"><div className="smallImg3"><img ref={ref} onClick={open} alt="Zöldellő Apartman"src={images[3]} width="100%" height="auto"/></div></div>
      )}
    </Item>
    <Item
      original={images[4]}
      thumbnail={images[4]}
      width="1920"
      height="1080"
    >
      {({ ref, open }) => (
        <div className="imgContainer"><div className="smallImg4"><img ref={ref} onClick={open} alt="Zöldellő Apartman"src={images[4]} width="100%" height="auto"/></div></div>
      )}
    </Item>
    </div>
    </div>
    <div className="galleryContainer2">
    <Item
      original={images[5]}
      thumbnail={images[5]}
      width="1920"
      height="1080"
    >
      {({ ref, open }) => (
        <div className="imgContainer"><div className="bigImg2"><img ref={ref} onClick={open} alt="Zöldellő Apartman"src={images[5]} width="100%" height="auto" /></div></div>
      )}
    </Item>
    <div className="smallContainer2">
    <Item
      original={images[6]}
      thumbnail={images[6]}
      width="1920"
      height="1080"
    >
      {({ ref, open }) => (
        <div className="imgContainer"><div className="smallImg5"><img ref={ref} onClick={open} alt="Zöldellő Apartman"src={images[6]} width="100%" height="fit-content"/></div></div>
      )}
    </Item>
    <Item
      original={images[7]}
      thumbnail={images[7]}
      width="1920"
      height="1080"
    >
      {({ ref, open }) => (
        <div className="imgContainer"><div className="smallImg6"><img ref={ref} onClick={open} alt="Zöldellő Apartman"src={images[7]} width="100%" height="auto"/></div></div>
      )}
    </Item>
    <Item
      original={images[9]}
      thumbnail={images[9]}
      width="1920"
      height="1080"
    >
      {({ ref, open }) => (
        <div className="imgContainer"><div className="smallImg7"><img ref={ref} onClick={open} alt="Zöldellő Apartman"src={images[9]} width="100%" height="auto"/></div></div>
      )}
    </Item>
    <Item
      original={images[10]}
      thumbnail={images[10]}
      width="1920"
      height="1080"
    >
      {({ ref, open }) => (
        <div className="imgContainer"><div className="smallImg8"><img ref={ref} onClick={open} alt="Zöldellő Apartman"src={images[10]} width="100%" height="auto"/></div></div>
      )}
    </Item>
    </div>
    </div>
    <div className="lowerContainer">{lowerImages.map(item => {
			return (GalleryItems(item));
		})}</div>
  </Gallery>
)