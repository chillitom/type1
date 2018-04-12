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
  }

  isValidNumber(s) {
    return /^\d*(\.\d*)?$/.test(s) && s !== '.';
  }

  handleChange(fieldName, value) {
    if (!this.isValidNumber(value)) {
      return;
    }

    this.setState({
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
            <span class="icon has-text-info tooltip" data-tooltip="Excluding dietary fiber">
              <i class="fas fa-info-circle"></i>
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

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">
          Type 1 Kitchen
        </h1>
        <p className="subtitle">
          Recipe calculator <strong>prototype</strong>
        </p>
        <Widget fraction="0.5" weight="276" calories="450" carbs="40" />
      </div>);
  }
}

export default App;
