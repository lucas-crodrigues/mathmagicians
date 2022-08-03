import { Component } from 'react';
import './CalculatorStyle.css';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="calculator">
        <input type="text" className="output" readOnly value={0} />
        <div className="buttons">
          <button type="button" className="bt_clear">AC</button>
          <button type="button" className="bt_sign">+/-</button>
          <button type="button" className="bt_percentage">%</button>
          <button type="button" className="bt_division right_column">÷</button>
          <button type="button" className="bt_7">7</button>
          <button type="button" className="bt_8">8</button>
          <button type="button" className="bt_9">9</button>
          <button type="button" className="bt_times right_column">x</button>
          <button type="button" className="bt_4">4</button>
          <button type="button" className="bt_5">5</button>
          <button type="button" className="bt_6">6</button>
          <button type="button" className="bt_minus right_column">-</button>
          <button type="button" className="bt_1">1</button>
          <button type="button" className="bt_2">2</button>
          <button type="button" className="bt_3">3</button>
          <button type="button" className="bt_plus right_column">+</button>
          <button type="button" className="bt_0">0</button>
          <button type="button" className="bt_dot">.</button>
          <button type="button" className="bt_equal right_column">=</button>
        </div>
      </section>
    );
  }
}
