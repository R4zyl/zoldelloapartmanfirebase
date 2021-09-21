import { render, screen } from '@testing-library/react';
import { NotImplementedYet } from '../NotImplementedYet';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const MockNotImplemented = () => {
  return (
    <BrowserRouter>
      <NotImplementedYet />
    </BrowserRouter>
  );
};
describe('404 page tests', () => {
  test('h1 gets rendered', () => {
    render(<MockNotImplemented />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  });

  test('h1 is visible to user', () => {
    render(<MockNotImplemented />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeVisible();
  });
  test('h1 gets rendered with proper text', () => {
    render(<MockNotImplemented />);
    const heading = screen.getByRole('heading');
    expect(heading.textContent).toBe('404');
  });
  test('underTitle gets rendered', () => {
    render(<MockNotImplemented />);
    const underTitle = screen.getByTitle('underTitle');
    expect(underTitle).toBeInTheDocument();
  });
  test('underTitle is visible to user', () => {
    render(<MockNotImplemented />);
    const underTitle = screen.getByTitle('underTitle');
    expect(underTitle).toBeVisible();
  });
  test('underTitle textcontent matches expected', () => {
    render(<MockNotImplemented />);
    const underTitle = screen.getByTitle('underTitle');
    expect(underTitle.textContent).toBe('Sorry');
  });
  test('explain text gets rendered', () => {
    render(<MockNotImplemented />);
    const explainText = screen.getByTitle('explainText');
    expect(explainText).toBeInTheDocument();
  });
  test('explain text is visible to user', () => {
    render(<MockNotImplemented />);
    const explainText = screen.getByTitle('explainText');
    expect(explainText).toBeVisible();
  });
  test('explain text content matches expected', () => {
    render(<MockNotImplemented />);
    const explainText = screen.getByTitle('explainText');
    expect(explainText.textContent).toBe('This page was not found');
  });
  test('button to home gets rendered', () => {
    render(<MockNotImplemented />);
    const homeButton = screen.getByRole('button');
    expect(homeButton).toBeInTheDocument();
  });
  test('button to home is visible to user', () => {
    render(<MockNotImplemented />);
    const homeButton = screen.getByRole('button');
    expect(homeButton).toBeVisible();
  });
  test('button to home text content matches expected', () => {
    render(<MockNotImplemented />);
    const homeButton = screen.getByRole('button');
    expect(homeButton.textContent).toBe('Go Home!');
  });
});
