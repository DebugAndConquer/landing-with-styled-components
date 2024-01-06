import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the page, checks rather text and image is visible and matches the snapshot', () => {
  const { container } = render(<App />);
  const linkElement = screen.getByText(/Action Button/i);
  const logoElement = screen.getByAltText(/Clear business logo/i);
  expect(linkElement).toBeInTheDocument();
  expect(logoElement).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

// ...
// More tests should be added if functioanlity is being added.
// ...