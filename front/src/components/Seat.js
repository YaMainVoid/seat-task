import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addOrder, rmOrder } from '../api';
import { freeColor } from '../styleInfo';

class Seat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: '',
            clicked: false
        };
        this.clicked = false;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let { type, id, cost } = this.props.info;
        let { row, chair } = this.props

        if (this.state.clicked) {
            this.setState({
                backgroundColor: ''
            })
            this.props.rmOrder(id)
        } else {
            this.setState({
                backgroundColor: freeColor
            })
            this.props.addOrder({
                type,
                id,
                cost,
                additionalInfo: {
                    row,
                    chair
                }
            })
        }   

        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() {
        let { width, height, margin, marginBottom } = this.props;
        let { content, type, existed, state } = this.props.info

        let style = {
            width:           `${width}px`,
            height:          `${height}px`,
            margin:          `${margin}px`,
            marginBottom:    `${marginBottom}px`,
            backgroundColor: this.state.backgroundColor
        }

        if (!existed) {
            return <div className="Seat"
                        style={ style }
                    ></div>
        }    

        if (type === 'row_info') {
            return <div className="Seat Seat_row-info"
                        style={ style }
                   >{ content }</div>
        }

        if (type === 'seat') {
            if (state === 'booked') {
                return <div className="Seat Seat_booked"
                            style={ style }
                       ></div>
            } else if (state === 'free') {
                return <div className="Seat Seat_free smooth-transition"
                            style={ style }
                            onClick={ this.handleClick }
                       >{ content }</div>
            }
        }
    }
}

export default connect(
    store => store,
    { addOrder, rmOrder }
)(Seat)
