import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addInput, updateInput } from '../api';

class InputNumber extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.value = +this.props.startValue || 10
        this.props.addInput({
            name: this.props.name,
            value: +this.props.startValue || 10
        })
    }

    handleChange(e) {
        this.props.updateInput({
            name: this.props.name,
            value: +e.target.value
        })
        this.value = e.target.value
    }

    render() {
        return (
            <div className="InputNumber"
                 style={{top: `${this.props.top}px`}}
            >
                <div className="InputNumber-Title">{ this.props.title }</div>
                <input className="InputNumber-Input"
                       type="number"
                       onChange={ this.handleChange }
                       value={ this.value}
                       min={ this.props.min || '1' }
                       max={ this.props.max || '9999' }
                       step={ this.props.step || '1' }
                />
            </div>
        )
    }
}

export default connect(
    state => ({
        store: state.inputsStore
    }),
    { addInput, updateInput }
)(InputNumber)
