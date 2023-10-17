import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import NavBar from '../components/NavBar';

test('renders contactify app landing text', () => {
  render(<App />);
  const h1El = screen.getByText(/Contactify app/i);
  expect(h1El).toBeInTheDocument();
});

test('renders your contacts in navbar', () => {
  render(<NavBar/>)
  const linkEl = screen.getByText(/your contacts/i)
  expect(linkEl).toBeInTheDocument()
})