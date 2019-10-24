import React, { Component } from 'react';
import Seat from './Seat';
import { connect } from 'react-redux';
import { rmComponent, setDrag } from '../api';

class Seats extends Component {
    constructor(props) {
        super(props);
        this.handleDragStart = this.handleDragStart.bind(this);
    }

    handleDragStart(e) {
        let el;
        while(el = document.getElementById('__delete__')) {
            document.getElementById('root').removeChild(el)
        }

        let { id, type, width, height, spec } = this.props.params;

        this.props.setDrag({
            id,
            type,
            width,
            height,
            offsetX: e.nativeEvent.layerX,
            offsetY: e.nativeEvent.layerY,
            spec
        });

        let image = this.seats.cloneNode(true);
        image.style.left = '-3000px'
        image.id = '__delete__'
        document.getElementById('root').appendChild(image)

        e.dataTransfer.setDragImage(image, e.nativeEvent.layerX, e.nativeEvent.layerY);

        setTimeout(() => this.props.rmComponent(id), 0);
    }

    render() {
        let { width, height, top, left, spec: 
                { seats_matrix, seatWidth, seatHeight, seatMargin, seatMarginBottom } } = this.props.params;

        let style = {
            top:    `${top}px`,
            left:   `${left}px`,
            width:  `${width}px`,
            height: `${height}px`,
        }

        let seatParams = {
            width: seatWidth,
            height: seatHeight,
            margin: seatMargin,
            marginBottom: seatMarginBottom
        }

        return (
            <div className="Seats"
                 style={ style }
                 draggable="true"
                 ref={ seats => this.seats = seats }
                 onDragStart={ this.handleDragStart } 
            >
                {
                    seats_matrix.map(row => row.map(chair => <Seat params={ Object.assign({}, seatParams, chair) } key={chair.id}/>))
                }
            </div>
        )
    }
}

export default connect(null, { rmComponent, setDrag })(Seats);
