import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import 'bulma-tooltip/dist/bulma-tooltip.min.css'

class Widget extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...props
    }

    this.handleChange = this.handleChange.bind(this);
    this.showTooltip = this.showTooltip.bind(this);
  }

  isValidNumber(s) {
    return /^\d*(\.\d*)?$/.test(s) && s !== '.';
  }

  showTooltip(name) {
    window.setTimeout(() => this.setState({ ...this.state, [name]: false }), 2000);
    this.setState({ ...this.state, [name]: true });
  }

  handleChange(fieldName, value) {
    if (!this.isValidNumber(value)) {
      return;
    }

    this.setState({
      ...this.state,
      fraction: ((this.props.fraction / this.props[fieldName]) * value).toFixed(2),
      weight: ((this.props.weight / this.props[fieldName]) * value).toFixed(0),
      calories: ((this.props.calories / this.props[fieldName]) * value).toFixed(0),
      carbs: ((this.props.carbs / this.props[fieldName]) * value).toFixed(0),
      [fieldName]: value
    });
  }

  render() {
    return (
      <div className="box" style={{ width: "10em" }}>
        <div className="field">
          <label className="label">Fraction</label>
          <div className="control">
            <input
              className="input"
              type="number"
              value={this.state.fraction}
              onChange={e => this.handleChange('fraction', e.target.value)}
              step="0.125"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Weight (g)</label>
          <div className="control">
            <input
              className="input"
              type="number"
              value={this.state.weight}
              onChange={e => this.handleChange('weight', e.target.value)}
              step="25"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">
            Carbs (g)
            <span
              className={`icon has-text-info tooltip ${this.state['carb-info'] ? 'is-tooltip-active' : ''}`}
              data-tooltip="Excluding dietary fiber"
              onClick={e => this.showTooltip('carb-info')}
            >
              <i className="fas fa-info-circle"></i>
            </span>
          </label>

          <div className="control">
            <input
              className="input"
              type="number"
              value={this.state.carbs}
              onChange={e => this.handleChange('carbs', e.target.value)}
              step="25"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Calories (kcal)</label>
          <div className="control">
            <input
              className="input"
              type="number"
              value={this.state.calories}
              onChange={e => this.handleChange('calories', e.target.value)}
              step="5"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Widget;
