import React from 'react';

export const GoogleMap = ({ className, width, height }) => {

    return(
        <div data-testid="0002" className={className}>
      <iframe title="map" width={width} height={height} loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJtyqgqLXBaUcRKNqKefvN0e4&key=AIzaSyBQkIJGNiFnQnwRMa-RjU9mBxseYrHvvnM"></iframe> 
      </div>
    )
}
