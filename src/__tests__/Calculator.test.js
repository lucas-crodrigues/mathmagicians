import { render, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator test suites', () => {
  test('Calculator screen', () => {
    render(<Calculator />);
    const output = screen.getByTestId('output');
    expect(output).toBeInTheDocument();
  });

  test('Check calculator buttons', () => {
    render(<Calculator />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(19);
  });
});
