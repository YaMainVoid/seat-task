import React, { Component } from 'react'
import { sendData, resetModal } from '../api';
import { connect } from 'react-redux';
import performData from '../utils/performData';

class TopPanel extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let data = performData(this.props.components);
        console.log(data);
        this.props.sendData(data)
    }

    render() {
        return (
            <div className="TopPanel">
                <button className="TopPanel-SaveButton"
                        onClick={ this.handleClick }
                >Save</button>
            </div>
        )
    }
}

export default connect(
    state => ({
        components:  state.componentsStore,
    }),
    { sendData, resetModal }
)(TopPanel)
