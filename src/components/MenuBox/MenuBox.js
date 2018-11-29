import React from 'react';
import './MenuBox.css';

import MenuItem from './MenuItem/MenuItem';

class MenuBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name ?
        this.props.name :
        new String("Menu"),
      menuItems: this.props.menuItems ?
        this.props.menuItems :
        new Array({ menuItemName: 'example' }),
    };
  }

  render() {
    return (
      <div className="MenuBox">
        <h1 className="MenuTitle">{this.state.name}</h1>
        {this.state.menuItems.map((menuItem, index) => (
          <MenuItem key={index} name={menuItem.menuItemName} />
        ))}
      </div>
    );
  }
}

export default MenuBox;