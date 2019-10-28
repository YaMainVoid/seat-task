import React, { Component } from 'react'
import { connect } from 'react-redux';
import { sendOrders } from '../api';

export class OrderBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalCost: 0 
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.sendOrders(this.props.orderStore);
    }

    render() {

        let totalCost = 0;
        if (!this.props.orderStore) {
            return;
        }
        this.props.orderStore.forEach(order => totalCost += order.cost)

        if (totalCost) {
            return (
                <div className="OrderBar">
                    <div className="OrderBar-Title">Information</div>
                    <div className="OrderBar-TotalCostInfo">Total cost: { totalCost }$</div>
                    <button className="OrderBar-OrderButton"
                            onClick={ this.handleClick }
                    >Buy</button>
                </div>
            )
        } else {
            return (
                <div className="OrderBar"></div>
            )
        }
    }
}

export default connect(
    store => store,
    { sendOrders }
)(OrderBar)
