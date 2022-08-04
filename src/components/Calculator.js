import { Component } from 'react';
import './CalculatorStyle.css';
import calculate from './logic/calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      states: {
        total: null,
        next: null,
        operation: null,
      },
    };
    this.calculate = this.calculate.bind(this);
  }

  calculate(e) {
    const { states } = this.state;
    const newState = calculate(states, e.target.textContent);
    this.setState({ states: newState });
  }

  render() {
    const { states } = this.state;
    return (
      <section className="calculator">
        <div className="display">{states.next || states.total || 0}</div>
        <div className="buttons">
          <button type="button" className="bt_clear" onClick={this.calculate}>AC</button>
          <button type="button" className="bt_sign" onClick={this.calculate}>+/-</button>
          <button type="button" className="bt_percentage" onClick={this.calculate}>%</button>
          <button type="button" className="bt_division right_column" onClick={this.calculate}>÷</button>
          <button type="button" className="bt_7" onClick={this.calculate}>7</button>
          <button type="button" className="bt_8" onClick={this.calculate}>8</button>
          <button type="button" className="bt_9" onClick={this.calculate}>9</button>
          <button type="button" className="bt_times right_column" onClick={this.calculate}>x</button>
          <button type="button" className="bt_4" onClick={this.calculate}>4</button>
          <button type="button" className="bt_5" onClick={this.calculate}>5</button>
          <button type="button" className="bt_6" onClick={this.calculate}>6</button>
          <button type="button" className="bt_minus right_column" onClick={this.calculate}>-</button>
          <button type="button" className="bt_1" onClick={this.calculate}>1</button>
          <button type="button" className="bt_2" onClick={this.calculate}>2</button>
          <button type="button" className="bt_3" onClick={this.calculate}>3</button>
          <button type="button" className="bt_plus right_column" onClick={this.calculate}>+</button>
          <button type="button" className="bt_0" onClick={this.calculate}>0</button>
          <button type="button" className="bt_dot" onClick={this.calculate}>.</button>
          <button type="button" className="bt_equal right_column" onClick={this.calculate}>=</button>
        </div>
      </section>
    );
  }
}
