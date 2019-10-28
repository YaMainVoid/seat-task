import React, { Component } from 'react';
import Seat from './Seat';

class Seats extends Component {
    render() {
        let { width, height, left, top, 
              spec: { seats_matrix, seatWidth, seatHeight, seatMargin, seatMarginBottom } 
                } = this.props.params;

        let style = {
            width:  `${width}px`,
            height: `${height}px`,
            left:   `${left}px`,
            top:    `${top}px`,
        }

        return (
            <div className="Seats"
                 style={ style }
            >
                {
                    seats_matrix.map((row,currentRow) => row.map((chair, currentChair) => (
                                                             <Seat key={ chair.id }
                                                                   info={ chair }
                                                                   width={ seatWidth }
                                                                   height={ seatHeight }
                                                                   margin={ seatMargin }
                                                                   marginBottom={ seatMarginBottom }
                                                                   row={ currentRow + 1}
                                                                   chair={ currentChair }
                                                             />)))
                }
            </div>
        )
    }
}

export default Seats
