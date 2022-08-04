import { Component } from 'react';
import './CalculatorStyle.css';
import calculate from './logic/calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { total, next } = this.state;
    return (
      <section className="calculator">
        <div className="display">{next || total || 0}</div>
        <div className="buttons">
          <button type="button" className="bt_clear" onClick={this.handleClick}>AC</button>
          <button type="button" className="bt_sign" onClick={this.handleClick}>+/-</button>
          <button type="button" className="bt_percentage" onClick={this.handleClick}>%</button>
          <button type="button" className="bt_division right_column" onClick={this.handleClick}>÷</button>
          <button type="button" className="bt_7" onClick={this.handleClick}>7</button>
          <button type="button" className="bt_8" onClick={this.handleClick}>8</button>
          <button type="button" className="bt_9" onClick={this.handleClick}>9</button>
          <button type="button" className="bt_times right_column" onClick={this.handleClick}>x</button>
          <button type="button" className="bt_4" onClick={this.handleClick}>4</button>
          <button type="button" className="bt_5" onClick={this.handleClick}>5</button>
          <button type="button" className="bt_6" onClick={this.handleClick}>6</button>
          <button type="button" className="bt_minus right_column" onClick={this.handleClick}>-</button>
          <button type="button" className="bt_1" onClick={this.handleClick}>1</button>
          <button type="button" className="bt_2" onClick={this.handleClick}>2</button>
          <button type="button" className="bt_3" onClick={this.handleClick}>3</button>
          <button type="button" className="bt_plus right_column" onClick={this.handleClick}>+</button>
          <button type="button" className="bt_0" onClick={this.handleClick}>0</button>
          <button type="button" className="bt_dot" onClick={this.handleClick}>.</button>
          <button type="button" className="bt_equal right_column" onClick={this.handleClick}>=</button>
        </div>
      </section>
    );
  }
}
