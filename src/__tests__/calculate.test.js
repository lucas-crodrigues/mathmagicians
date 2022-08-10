import calculate from '../components/logic/calculate';

describe('test calculate functions', () => {
  test('Press "AC" button', () => {
    const object = {
      total: '10',
      next: '',
      operation: '',
    };

    const button = 'AC';

    const result = {
      total: null,
      next: null,
      operation: null,
    };

    expect(calculate(object, button)).toStrictEqual(result);
  });

  test('Press a number', () => {
    const object = {
      total: null,
      next: null,
    };

    const button = '7';

    const result = {
      total: null,
      next: button,
    };

    expect(calculate(object, button)).toStrictEqual(result);
  });

  test('Press "." button', () => {
    const object = {
      total: null,
      next: '7',
    };

    const button = '.';

    const result = {
      total: null,
      next: '7.',
    };

    expect(calculate(object, button)).toStrictEqual(result);
  });

  test('Press "=" button', () => {
    const object = {
      total: '50',
      next: '50',
      operation: '+',
    };

    const button = '=';

    const result = {
      total: '100',
      next: null,
      operation: null,
    };

    expect(calculate(object, button)).toStrictEqual(result);
  });

  test('Press "+/-" button', () => {
    const object = {
      total: null,
      next: '8',
    };

    const button = '+/-';

    const result = {
      total: null,
      next: '-8',
    };

    expect(calculate(object, button)).toStrictEqual(result);
  });
});
