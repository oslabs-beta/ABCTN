import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../src/features/navbar/Navbar';
import '@testing-library/jest-dom';

describe('NavBar', () => {
  it('renders navigation links and logo', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    // Check for logo and links
    expect(screen.getByAltText('Logo')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('EC2 Monitor')).toBeInTheDocument();
  });
});
