import React, { useState } from 'react';
import './CalculatorStyle.css';
import calculate from './logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    next: null, total: null, operation: null, err: null,
  });

  const calculation = (e) => {
    setState((state) => calculate(state, e.target.textContent));
  };

  return (
    <section className="calculator">
      <div className="output">{state.next || state.operation || state.total || state.err || 0}</div>
      <div className="buttons">
        <button type="button" className="bt_clear" onClick={calculation}>AC</button>
        <button type="button" className="bt_sign" onClick={calculation}>+/-</button>
        <button type="button" className="bt_percentage" onClick={calculation}>%</button>
        <button type="button" className="bt_division right_column" onClick={calculation}>÷</button>
        <button type="button" className="bt_7" onClick={calculation}>7</button>
        <button type="button" className="bt_8" onClick={calculation}>8</button>
        <button type="button" className="bt_9" onClick={calculation}>9</button>
        <button type="button" className="bt_times right_column" onClick={calculation}>x</button>
        <button type="button" className="bt_4" onClick={calculation}>4</button>
        <button type="button" className="bt_5" onClick={calculation}>5</button>
        <button type="button" className="bt_6" onClick={calculation}>6</button>
        <button type="button" className="bt_minus right_column" onClick={calculation}>-</button>
        <button type="button" className="bt_1" onClick={calculation}>1</button>
        <button type="button" className="bt_2" onClick={calculation}>2</button>
        <button type="button" className="bt_3" onClick={calculation}>3</button>
        <button type="button" className="bt_plus right_column" onClick={calculation}>+</button>
        <button type="button" className="bt_0" onClick={calculation}>0</button>
        <button type="button" className="bt_dot" onClick={calculation}>.</button>
        <button type="button" className="bt_equal right_column" onClick={calculation}>=</button>
      </div>
    </section>
  );
};

export default Calculator;
