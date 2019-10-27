import React, { Component } from 'react'
import { connect } from 'react-redux';
import { rmComponent, setDrag } from '../api';

class Table extends Component {
    constructor(props) {
        super(props);
        this.handleDragStart = this.handleDragStart.bind(this);
    }

    handleDragStart(e) {
        let el;
        while(el = document.getElementById('__delete__')) {
            document.getElementById('root').removeChild(el);
        }

        let { id, type, width, height, spec } = this.props.params;

        this.props.setDrag({
            id,
            type,
            width,
            height,
            offsetX: e.nativeEvent.layerX,
            offsetY: e.nativeEvent.layerY,
            spec
        });

        let image = this.table.cloneNode(true);
        image.style.left = '-1000px'
        image.id = '__delete__'
        document.getElementById('root').appendChild(image)

        e.dataTransfer.setDragImage(image, e.nativeEvent.layerX, e.nativeEvent.layerY);

        setTimeout(() => this.props.rmComponent(id), 0);
    }

    render() {
        let { width, height, top, left, spec: { qty } } = this.props.params;

        let style = {
            top:    `${top}px`,
            left:   `${left}px`,
            width:  `${width}px`,
            height: `${height}px`,
        }

        return (
            <div style={ style } 
                 className="Table"
                 draggable="true"
                 ref={ (table => this.table = table) }
                 onDragStart={ this.handleDragStart }
            >
                { qty }
            </div>
        )
    }
}

export default connect(null, { setDrag, rmComponent })(Table);