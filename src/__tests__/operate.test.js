import operate from '../components/logic/operate';

describe('test operate functions', () => {
  test(' "+" operation ', () => {
    const numberOne = 5;

    const numberTwo = 8;

    const operation = '+';

    expect(operate(numberOne, numberTwo, operation)).toEqual('13');
  });

  test(' "-" operation ', () => {
    const numberOne = 5;

    const numberTwo = 8;

    const operation = '-';

    expect(operate(numberOne, numberTwo, operation)).toEqual('-3');
  });

  test(' "x" operation ', () => {
    const numberOne = 5;

    const numberTwo = 8;

    const operation = 'x';

    expect(operate(numberOne, numberTwo, operation)).toEqual('40');
  });

  test(' "÷" operation ', () => {
    const numberOne = 8;

    const numberTwo = 8;

    const operation = '÷';

    expect(operate(numberOne, numberTwo, operation)).toEqual('1');
  });

  test(' "%" operation ', () => {
    const numberOne = 5;

    const numberTwo = 2;

    const operation = '%';

    expect(operate(numberOne, numberTwo, operation)).toEqual('1');
  });
});
