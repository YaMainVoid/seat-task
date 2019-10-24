import React, { Component } from 'react';
import InputNumber from './InputNumber';
import CreateButton from './CreateButton'

class CreateSeats extends Component {
    generateInners() {
        let arr = []
        for(let i = 0; i < 18; i++) {
            arr.push(<div className="CreateSeats-Seat" key={`_${i}gggg`}></div>)
        }
        return arr;
    }

    render() {
        return (
            <div className="CreateSeats">
                <div className="CreateSeats-Seats">
                    {this.generateInners()}
                </div>
                <InputNumber name="seats_rows" title="Rows:" startValue="3" top="26"/>
                <InputNumber name="seats_chairs" title="Chairs:" startValue="10" top="71"/>
                <CreateButton type="create_seats" top="113" />
            </div>
        )
    }
}

export default CreateSeats
