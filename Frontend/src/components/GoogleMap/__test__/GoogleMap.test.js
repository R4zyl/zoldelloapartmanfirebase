import { render, screen } from '@testing-library/react';
import { GoogleMap } from '../GoogleMap';
import React from 'react'
import { BrowserRouter } from "react-router-dom";

const MockGoogleMap = ({className,width,height}) => {
    return(
        <BrowserRouter>
        <GoogleMap className={className} width={width} height={height} />
        </BrowserRouter>
    )
}
describe('Map Frame tests', ()=>{
    test('map iframe gets rendered', () => {
  render(<MockGoogleMap className={'exampleClass'} width={'32px'} height={'32px'}/>);
  const mapIframe = screen.getByTitle(/map/i);
  expect(mapIframe).toBeInTheDocument();
});

test('map iframe is visible to the user', () => {
    render(<MockGoogleMap className={'exampleClass'} width={'32px'} height={'32px'}/>);
    const mapIframe = screen.getByTitle(/map/i);
    expect(mapIframe).toBeVisible();
  });
  test('map iframe div container gets rendered with the correct className', () => {
    render(<MockGoogleMap className={'exampleClass'} width={'32px'} height={'32px'}/>);
    const mapIframe = screen.getByTestId('0002');
    expect(mapIframe.className).toBe('exampleClass');
  });
  test('map iframe has the correct width', () => {
    render(<MockGoogleMap className={'exampleClass'} width={'32px'} height={'32px'}/>);
    const mapIframe = screen.getByTitle(/map/i);
    expect(mapIframe.width).toBe('32px');
  });
  test('map iframe has the correct height', () => {
    render(<MockGoogleMap className={'exampleClass'} width={'32px'} height={'32px'}/>);
    const mapIframe = screen.getByTitle(/map/i);
    expect(mapIframe.width).toBe('32px');
  });
  test('map iframe has the correct src', () => {
    render(<MockGoogleMap className={'exampleClass'} width={'32px'} height={'32px'}/>);
    const mapIframe = screen.getByTitle(/map/i);
    expect(mapIframe.src).toBe('https://www.google.com/maps/embed/v1/place?q=place_id:ChIJtyqgqLXBaUcRKNqKefvN0e4&key=AIzaSyBQkIJGNiFnQnwRMa-RjU9mBxseYrHvvnM');
  });
})
