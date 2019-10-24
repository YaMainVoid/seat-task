import React, { Component } from 'react';
import InputNumber from './InputNumber';
import CreateButton from './CreateButton';

class CreateTable extends Component {
    render() {
        return (
            <div className="CreateTable">
                <div className="CreateTable-Table"></div>
                <InputNumber top="35" 
                             title="Qty"
                             startValue="7"
                             name="table_qty"
                />
                <CreateButton top="85"
                              type="create_table"/>
            </div>
        )
    }
}

export default CreateTable
