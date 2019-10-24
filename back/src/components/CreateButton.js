import React, { Component } from 'react';
import { connect } from 'react-redux';
import id from '../utils/id';
import matrixGenerator from '../utils/SeatsMatrixGenerator';
import { addComponent } from '../api';
import { tableWidth, 
         tableHeight,
         sceneWidth,
         sceneHeight,
         seatWidth,
         seatHeight,
         seatMargin,
         seatMarginBottom } from '../sizingInfo';

class CreateButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        switch (this.props.type) {
            case 'create_table':
                this.props.addComponent({
                    id: id.next(),
                    type: 'table',
                    width: tableWidth,
                    height: tableHeight,
                    top: 50,
                    left: 50,
                    cost: 1,
                    spec: {
                        state: 'free',
                        cost: 0,
                        qty: this.props.inputs.find(obj => obj.name === 'table_qty').value
                    }
                })
                break;
            case 'create_seats':
                let rows   = this.props.inputs.find(obj => obj.name === 'seats_rows').value
                let chairs = this.props.inputs.find(obj => obj.name === 'seats_chairs').value

                let width  = (chairs + 1) * seatWidth + seatMargin * (chairs + 2) * 2;
                let height = (rows + 1) * seatHeight + seatMarginBottom * (rows + 1);

                this.props.addComponent({
                    id: id.next(),
                    type: 'seats',
                    width,
                    height,
                    top: 100,
                    left: 50,
                    cost: 1,
                    spec: {
                        seatWidth,
                        seatHeight,
                        seatMargin,
                        seatMarginBottom,
                        rows,
                        chairs,
                        seats_matrix: matrixGenerator.generate(rows, chairs)
                    }
                })
                break;
            case 'create_scene': 
                let name = this.props.inputs.find(obj => obj.name === 'scene_name').value;
                name = name || 'Screen';

                this.props.addComponent({
                    id: id.next(),
                    type: 'scene',
                    width: sceneWidth,
                    height: sceneHeight,
                    top: 50,
                    left: 150,
                    spec: {
                        name
                    }
                })
                break;
            default: 
                break;
        }
    }

    render() {
        return (
            <button className="CreateButton" 
                    style={{ top: `${this.props.top}px` }}
                    onClick={ this.handleClick } 
            >
                Create
            </button>
        )
    }
}

export default connect(
    state => ({
        components: state.componentsStore,
        inputs: state.inputsStore
    }),
    { addComponent }
)(CreateButton);