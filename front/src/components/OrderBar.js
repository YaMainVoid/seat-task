import React, { Component } from 'react'
import { connect } from 'react-redux';
import { sendOrders } from '../api';

export class OrderBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalCost: 20.46
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.sendOrders(this.props.orderStore);
    }

    componentWillUpdate() {
        let totalCost = 0;
        if (!this.props.orderStore) {
            return;
        }
        this.props.orderStore.map(order => totalCost += order.cost)
        // this.setState({
        //     totalCost
        // })
        console.log(this.state.totalCost)
    }

    render() {

        if (this.state.totalCost) {
            return (
                <div className="OrderBar">
                    <div className="OrderBar-Title">Information</div>
                    <div className="OrderBar-TotalCostInfo">Total cost: { this.state.totalCost }$</div>
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
