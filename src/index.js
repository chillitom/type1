import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Widget from './App';

let portionControls = document.querySelectorAll('.portions-control');

portionControls.forEach(control => {
    let fraction = control.dataset.fraction;
    let weight = control.dataset.weight;
    let calories = control.dataset.calories;
    let carbs = control.dataset.carbs;

    let widget = <Widget fraction={fraction} weight={weight} calories={calories} carbs={carbs} />;

    ReactDOM.render(widget, control);

});
