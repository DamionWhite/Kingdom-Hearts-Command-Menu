import React from 'react';
import './MenuItem.css';

class MenuItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name ? this.props.name : "Item",
      active: Boolean(this.props.active),
      disabled: Boolean(this.props.disabled),
    }
  }

  render() {
    let className = 'MenuItem';
    if (this.state.active)
      className += ' MenuItem-Active';
    if (this.state.disabled)
      className += ' MenuItem-Disabled';

    return (
      <div className={className}>
        <p>{this.state.name}</p>
      </div>
    );
  }
}

export default MenuItem;