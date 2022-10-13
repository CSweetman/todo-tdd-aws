import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('renders the header component and checks if there is header', () => {
  render(<Header title="App title" />);
  const headElement = screen.getByRole("heading");
  expect(headElement).toBeInTheDocument();
});


test('renders the header component with proper text passed in from props', () => {
  render(<Header title="App title" />);
  const headElement = screen.getByRole("heading", { name: 'App title' });
  expect(headElement).toBeInTheDocument();
});
