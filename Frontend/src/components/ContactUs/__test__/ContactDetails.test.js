import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithState } from './RenderWithState';
import { ContactDetails } from '../ContactDetails';

const initialState = {
  language: { language: 'hun' },
};

describe('Contact Details tests', () => {
  test('Contact details container has the proper className', () => {
    renderWithState(<ContactDetails />, { initialState });
    const container = screen.getByTestId('01');
    expect(container.className).toBe('contactInfoContainer');
  });
  test('Contact info title is visible', () => {
    renderWithState(<ContactDetails />, { initialState });
    const contactTitle = screen.getByTestId('02');
    expect(contactTitle).toBeVisible();
  });
  test('Contact info title renders text properly(hun)', () => {
    renderWithState(<ContactDetails />, { initialState });
    const contactTitle = screen.getByTestId('02');
    expect(contactTitle.textContent).toBe('Ahol elérhetsz minket');
  });
  test('Contact info title renders text properly(eng)', () => {
    renderWithState(<ContactDetails />, { });
    const contactTitle = screen.getByTestId('02');
    expect(contactTitle.textContent).toBe('Where you can reach us');
  });
  test('Contact info undertitle renders text properly(hun)', () => {
    renderWithState(<ContactDetails />, { initialState });
    const contactTitle = screen.getByTestId('03');
    expect(contactTitle.textContent).toBe('Keress minket bátran, amennyiben kérdésed lenne, vagy szállást szeretnél foglalni!');
  });
  test('Contact info undertitle renders text properly(eng)', () => {
    renderWithState(<ContactDetails />, { });
    const contactUnderTitle = screen.getByTestId('03');
    expect(contactUnderTitle.textContent).toBe('Feel free to contact us, if you have any questions, or if you want to book your stay!');
  });
  test('Proper email address gets displayed', () => {
    renderWithState(<ContactDetails />, { });
    const email = screen.getByTestId('04');
    expect(email.textContent).toBe('temesi.szabolcs@gmail.com');
  });
  test('email icon is visible', () => {
    renderWithState(<ContactDetails />, { });
    const emailIcon = screen.getByAltText('icon of a mail');
    expect(emailIcon).toBeVisible();
  });
  test('phone icon is visible', () => {
    renderWithState(<ContactDetails />, { });
    const phoneIcon = screen.getByAltText('icon of a phone');
    expect(phoneIcon).toBeVisible();
  });
  test('Proper phone number gets displayed', () => {
    renderWithState(<ContactDetails />, { });
    const phoneNumber = screen.getByTestId('05');
    expect(phoneNumber.textContent).toBe('+36 30 325 1661');
  });
  test('Proper address gets displayed with hun state', () => {
    renderWithState(<ContactDetails />, { initialState });
    const address = screen.getByTestId('06');
    expect(address.textContent).toBe('8600, Siófok, Mátyás király u. 4/A');
  });
  test('Proper address gets displayed without state', () => {
    renderWithState(<ContactDetails />, { });
    const address = screen.getByTestId('06');
    expect(address.textContent).toBe('Mátyás király street 4/A., Siófok, 8600');
  });
});
