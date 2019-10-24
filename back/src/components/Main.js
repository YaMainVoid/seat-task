import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../Main.css';
import LeftPanel from './LeftPanel';
import CenterPanel from './CenterPanel';
import RightPanel from './RightPanel';
import ResultModalWindow from './ResultModalWindow';

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <LeftPanel />
                <CenterPanel />
                <RightPanel />
                <ResultModalWindow />
            </div>
        )
    }
}

export default Main
