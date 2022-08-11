import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

describe('Header test suite', () => {
  test('check if theres a header in the dom', () => {
    render(<BrowserRouter><Header /></BrowserRouter>);
    const headerElement = screen.getByRole('heading');
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveTextContent('Math Magicians');
  });

  test('check if the navigation links are rendered', () => {
    render(<BrowserRouter><Header /></BrowserRouter>);
    const listElements = screen.getAllByRole('link');
    expect(listElements.length).toBe(3);
  });
});

describe('Footer test suite', () => {
  test('check if theres a footer in the dom', () => {
    render(<Footer />);
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
  });
});
