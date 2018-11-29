import React, { Component } from 'react';
import 'normalize.css';
import './App.css';

import MenuBox from './MenuBox/MenuBox';

class App extends Component {
    render() {
        let menuItems = new Array();
        menuItems.push({ menuItemName: 'Attack' });
        menuItems.push({ menuItemName: 'Magic' });
        menuItems.push({ menuItemName: 'Items' });
        menuItems.push({ menuItemName: '?' });

        return (
            <div className="App">
                <MenuBox name="COMMAND" menuItems={menuItems} />
            </div>
        );
    }
}

export default App;