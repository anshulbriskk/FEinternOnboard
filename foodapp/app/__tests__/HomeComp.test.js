import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
  it('should render navbar', () => {
    render(<Navbar />);
    const navbarElement = screen.getByText(/home/i);
    expect(navbarElement).toBeInTheDocument();
  });
});
