import React, { Component } from 'react';
import CreateButton from './CreateButton';
import { connect } from 'react-redux';
import { addInput, updateInput } from '../api';

class CreateScene extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.value = '';
        this.props.addInput({
            name: "scene_name",
            value: ''
        })
    }

    handleChange(e) {
        this.props.updateInput({
            name: "scene_name",
            value: e.target.value
        })
        this.value = e.target.value;
    }

    render() {
        return (
            <div className="CreateScene">
                <div className="CreateScene-Block">
                    <div className="CreateScene-Text">Name: </div>
                    <input className="CreateScene-Input"
                           onChange={this.handleChange}
                           value={this.value}       
                    />
                </div>
                <div className="CreateScene-Label">Text Label</div>
                <CreateButton type="create_scene" top="151" />
            </div>
        )
    }
}

export default connect(
    state => ({
        store: state.inputsStore
    }),
    { addInput, updateInput }
)(CreateScene)
