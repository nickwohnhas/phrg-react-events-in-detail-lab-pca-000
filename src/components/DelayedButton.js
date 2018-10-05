import React from 'react';

class DelayedButton extends React.Component {
  onDelayedClick = (event) => {
    event.persist()
    setTimeout(
      () => {
      this.props.onDelayedClick(event);
    }, this.props.delay)
  }
  render() {
    return (
    <div>
    <button onClick={this.onDelayedClick}>Click it
    </button>
    </div>
    )
  }
}

export default DelayedButton;
