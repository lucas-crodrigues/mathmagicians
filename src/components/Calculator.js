import { Component } from 'react';
import './CalculatorStyle.css';
import {
  AddToOutput, SolveOutput, ClearAll, ChangeSign,
} from './calculatorLogic';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="calculator">
        <input type="text" className="output" readOnly placeholder={0} />
        <div className="buttons">
          <button type="button" className="bt_clear" onClick={ClearAll}>AC</button>
          <button type="button" className="bt_sign" onClick={ChangeSign}>+/-</button>
          <button type="button" className="bt_percentage" onClick={AddToOutput}>%</button>
          <button type="button" className="bt_division right_column" onClick={AddToOutput}>÷</button>
          <button type="button" className="bt_7" onClick={AddToOutput}>7</button>
          <button type="button" className="bt_8" onClick={AddToOutput}>8</button>
          <button type="button" className="bt_9" onClick={AddToOutput}>9</button>
          <button type="button" className="bt_times right_column" onClick={AddToOutput}>x</button>
          <button type="button" className="bt_4" onClick={AddToOutput}>4</button>
          <button type="button" className="bt_5" onClick={AddToOutput}>5</button>
          <button type="button" className="bt_6" onClick={AddToOutput}>6</button>
          <button type="button" className="bt_minus right_column" onClick={AddToOutput}>-</button>
          <button type="button" className="bt_1" onClick={AddToOutput}>1</button>
          <button type="button" className="bt_2" onClick={AddToOutput}>2</button>
          <button type="button" className="bt_3" onClick={AddToOutput}>3</button>
          <button type="button" className="bt_plus right_column" onClick={AddToOutput}>+</button>
          <button type="button" className="bt_0" onClick={AddToOutput}>0</button>
          <button type="button" className="bt_dot" onClick={AddToOutput}>.</button>
          <button type="button" className="bt_equal right_column" onClick={SolveOutput}>=</button>
        </div>
      </section>
    );
  }
}
