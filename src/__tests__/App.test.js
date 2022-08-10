import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from '../App';

describe('Calculator page test suites', () => {
  test('Calculator page snapshot', () => {
    const renderedComponent = renderer.create(<BrowserRouter><App /></BrowserRouter>).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  test('Check calculator page title', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const calculatorHeading = screen.getByRole('heading', { name: /let's do some math!/i });
    expect(calculatorHeading).toHaveTextContent('Let\'s do some math!');
  });

  test('Check calculator presence', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const buttonAC = screen.getByRole('button', { name: /ac/i });
    expect(buttonAC).toBeInTheDocument();
  });
});
