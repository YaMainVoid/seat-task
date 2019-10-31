import React, { Component } from 'react';
import { connect } from 'react-redux';
import { rmComponent, setDrag, addComponent } from '../api';
import { Rnd } from 'react-rnd'

class Scene extends Component {
    constructor(props) {
        super(props);
        this.handleDragStop   = this.handleDragStop.bind(this);
        this.handleResizeStop = this.handleResizeStop.bind(this);
        let { width, height, top, left } = this.props.params;
        this.state = {
            width,
            height,
            top,
            left
        }
    }

    handleDragStop(e, d) {
        const component = this.props.params;
        component.top   = d.y;
        component.left  = d.x;
        this.props.rmComponent(component.id);
        this.props.addComponent(component)
    }

    handleResizeStop(e, direction, ref, delta, position) {
        console.log(delta)
        const component   = this.props.params;
        component.top     = position.y;
        component.left    = position.x;
        component.width  += delta.width;
        component.height += delta.height;
        this.props.rmComponent(component.id);
        this.props.addComponent(component)
    }

    render() {
        let { width, height, left, top, spec: { name } } = this.props.params;

        let style = {
            cursor: 'grab',
            display: 'flex',
            justifyContent: 'center',
            itemsAlign: 'center'
        }

        return (
            // link to Rnd https://github.com/bokuweb/react-rnd
            <Rnd className='Scene'
                 style={ style }
                 default={{
                     x: left,
                     y: top,
                     width,
                     height,
                 }}
                 onDragStop={ this.handleDragStop }
                 onResizeStop={ this.handleResizeStop }
            >
                { name }
            </Rnd>
        )
    }
}

export default connect(null, { setDrag, rmComponent, addComponent })(Scene);