import React, { Component } from 'react'
import { connect } from 'react-redux';
import { rmComponent, setDrag } from '../api';

class Scene extends Component {
    constructor(props) {
        super(props);
        this.handleDragStart = this.handleDragStart.bind(this);
    }

    handleDragStart(e) {
        let el;
        while(el = document.getElementById('delete')) {
            document.getElementById('root').removeChild(el);
        }

        let { id, type, state, width, height, spec } = this.props.params;

        this.props.setDrag({
            id,
            type,
            state,
            width,
            height,
            offsetX: e.nativeEvent.layerX,
            offsetY: e.nativeEvent.layerY,
            spec
        });

        let image = this.scene.cloneNode(true);
        image.style.left = '-1000px'
        image.id = '__delete__'
        document.getElementById('root').appendChild(image)

        e.dataTransfer.setDragImage(image, e.nativeEvent.layerX, e.nativeEvent.layerY);

        setTimeout(() => this.props.rmComponent(id), 0);
    }

    render() {
        let { width, height, top, left, spec: { name } } = this.props.params;

        let style = {
            top:    `${top}px`,
            left:   `${left}px`,
            width:  `${width}px`,
            height: `${height}px`,
        }

        return (
            <div style={ style } 
                 className="Scene"
                 draggable="true"
                 ref={ (scene => this.scene = scene) }
                 onDragStart={ this.handleDragStart }
            >
                { name }
            </div>
        )
    }
}

export default connect(null, { setDrag, rmComponent })(Scene);