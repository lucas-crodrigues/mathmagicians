import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from '../Home';

describe('Home page test suites', () => {
  test('Home page snapshot', () => {
    const renderedComponent = renderer.create(<BrowserRouter><Home /></BrowserRouter>).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  test('Check home page title', () => {
    render(<BrowserRouter><Home /></BrowserRouter>);
    const homeHeading = screen.getByRole('heading', { name: /welcome to our page!/i });
    expect(homeHeading).toHaveTextContent('Welcome to our page!');
  });
});
