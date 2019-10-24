import React, { Component } from 'react';
import TopPanel from './TopPanel';
import Sandbox from './Sandbox';

class CenterPanel extends Component {
    render() {
        return (
            <div className="CenterPanel">
                <TopPanel />
                <Sandbox />
            </div>
        )
    }
}

export default CenterPanel
