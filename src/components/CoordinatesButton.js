// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
  onClick = event => {
    const coords = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(coords);
  };

  render() {
    return <button onClick={event => this.onClick(event)}></button>
  };
}