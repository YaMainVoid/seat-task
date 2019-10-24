import '../Main.css';
import React, { Component } from 'react'
import LeftPanel from './LeftPanel';
import ChoisePlace from './ChoisePlace';

export class Main extends Component {
    render() {
        return (
            <div className="Main">
               <LeftPanel />
               <ChoisePlace />
            </div>
        )
    }
}

export default Main
