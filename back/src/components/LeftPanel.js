import React, { Component } from 'react';
import InfoCard from './InfoCard';
import CreateTable from './CreateTable';
import CreateSeats from './CreateSeats';
import CreateScene from './CreateScene';

class LeftPanel extends Component {
    render() {
        return (
            <div className="LeftPanel">
                <InfoCard>Create Table</InfoCard>
                <CreateTable />
                <CreateSeats />
                <InfoCard>Create Scene</InfoCard>
                <CreateScene />
                <InfoCard>Options</InfoCard>
            </div>
        )
    }
}

export default LeftPanel
