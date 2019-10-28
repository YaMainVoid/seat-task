import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addOrder, rmOrder } from '../api';
import { freeColor } from '../styleInfo';

class Table extends Component {
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
        let { type, id, spec: { cost } } = this.props.params;

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
                additionalInfo: {}
            })
        }   

        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() {
        let { width, height, left, top, spec: { state, qty } } = this.props.params;

        let style = {
            width:           `${width}px`,
            height:          `${height}px`,
            left:            `${left}px`,
            top:             `${top}px`,
            backgroundColor: this.state.backgroundColor
        }

        if (state === 'booked') {
            return (
                <div className="Table Table_booked"
                     style={ style }
                ></div>
            )
        } 

        if (state === 'free') {
            return (
            <div className="Table Table_free smooth-transition"
                 style={ style }
                 onClick={ this.handleClick }
            >
                { qty }
            </div>
            )
        }
    }
}

export default connect(
    store => ({
        orderStore: store.orderStore
    }), 
    { addOrder, rmOrder }
)(Table)
