import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Quote from '../Quote';

describe('Quote page test suites', () => {
  test('Quote page snapshot', () => {
    const renderedComponent = renderer.create(<BrowserRouter><Quote /></BrowserRouter>).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  test('Check quote presencce', () => {
    render(<BrowserRouter><Quote /></BrowserRouter>);
    const quote = screen.getByRole('heading', { name: /“sometimes the questions are complicated and the answers are simple\.” – dr\. seuss/i });
    expect(quote).toHaveTextContent('“Sometimes the questions are complicated and the answers are simple.” – Dr. Seuss');
  });
});
