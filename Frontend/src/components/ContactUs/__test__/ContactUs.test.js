import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithState } from './RenderWithState';
import { ContactUs } from '../ContactUs';

const initialState = {
  language: { language: 'hun' },
};

describe('ContactForm', () => {
  test('ContactForm title gets rendered', () => {
    renderWithState(<ContactUs />, { initialState });
    const title = screen.getByRole('heading');
    expect(title).toBeInTheDocument();
  });
  test('ContactForm title is visible to user', () => {
    renderWithState(<ContactUs />, { initialState });
    const title = screen.getByRole('heading');
    expect(title).toBeVisible();
  });
  test('ContactForm title gets rendered in the correct language(hun)', () => {
    renderWithState(<ContactUs />, { initialState });
    const title = screen.getByRole('heading');
    expect(title.textContent).toBe('Írj nekünk!');
  });
  test('ContactForm title gets rendered in the correct language', () => {
    renderWithState(<ContactUs />, {});
    const title = screen.getByRole('heading');
    expect(title.textContent).not.toBe('Írj nekünk!');
  });
  test('ContactForm title gets rendered in the correct language(eng)', () => {
    renderWithState(<ContactUs />, {});
    const title = screen.getByRole('heading');
    expect(title.textContent).toBe('Contact us');
  });
  test('email input is visible to the user', () => {
    renderWithState(<ContactUs />, { initialState });
    const emailInputElement = screen.getByPlaceholderText(/Email/i);
    expect(emailInputElement).toBeVisible();
  });
  test('should render email input element', () => {
    renderWithState(<ContactUs />, { initialState });
    const emailInputElement = screen.getByPlaceholderText(/Email/i);
    expect(emailInputElement).toBeInTheDocument();
  });
  test('should be able to type in email input', () => {
    renderWithState(<ContactUs />, { initialState });
    const emailInputElement = screen.getByPlaceholderText(/Email/i);
    fireEvent.change(emailInputElement, {
      target: { value: 'example@gmail.com' },
    });
    expect(emailInputElement.value).toBe('example@gmail.com');
  });
  test('name input is visible to the user', () => {
    renderWithState(<ContactUs />, { initialState });
    const nameInputElement = screen.getByTestId('0005');
    expect(nameInputElement).toBeVisible();
  });
  test('should render name input element', () => {
    renderWithState(<ContactUs />, { initialState });
    const nameInputElement = screen.getByTestId('0005');
    expect(nameInputElement).toBeInTheDocument();
  });
  test('should be able to type in name input', () => {
    renderWithState(<ContactUs />, { initialState });
    const nameInputElement = screen.getByTestId('0005');
    fireEvent.change(nameInputElement, { target: { value: 'Johnny' } });
    expect(nameInputElement.value).toBe('Johnny');
  });
  test('name placeholder language with state.language hun', () => {
    renderWithState(<ContactUs />, { initialState });
    const nameInputElement = screen.getByTestId('0005');
    expect(nameInputElement.placeholder).toBe('Név');
  });
  test('name placeholder language without language state', () => {
    renderWithState(<ContactUs />, {});
    const nameInputElement = screen.getByTestId('0005');
    expect(nameInputElement.placeholder).toBe('Your name');
  });
  test('form button gets rendered', () => {
    renderWithState(<ContactUs />, {});
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
  test('form button is visible to user', () => {
    renderWithState(<ContactUs />, {});
    const button = screen.getByRole('button');
    expect(button).toBeVisible();
  });
  test('form button gets rendered english', () => {
    renderWithState(<ContactUs />, {});
    const button = screen.getByRole('button');
    expect(button.textContent).toBe('Send message');
  });
  test('form button gets rendered hun', () => {
    renderWithState(<ContactUs />, { initialState });
    const button = screen.getByRole('button');
    expect(button.textContent).toBe('Üzenet küldése');
  });
});
