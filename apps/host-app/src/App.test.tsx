import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText(/Host Application/i)).toBeInTheDocument();
  });

  it('renders language switcher', () => {
    render(<App />);
    expect(screen.getByText(/Switch Language:/i)).toBeInTheDocument();
  });

  it('renders both language buttons', () => {
    render(<App />);
    expect(screen.getByText('English')).toBeInTheDocument();
    expect(screen.getByText('Español')).toBeInTheDocument();
  });

  it('renders microapp titles', () => {
    render(<App />);
    expect(screen.getByText(/Content from Microapp One:/i)).toBeInTheDocument();
    expect(screen.getByText(/Content from Microapp Two:/i)).toBeInTheDocument();
  });
}); 