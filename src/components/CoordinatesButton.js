import React from 'react';

class CoordinatesButton extends React.Component {
  clickIt = (event) => {
    event.persist()
    this.props.onReceiveCoordinates([event.pageX, event.pageY])
  }
  render() {
    return (
      <button onClick={this.clickIt}>Click me!</button>
    );
  }
}
export default CoordinatesButton;
