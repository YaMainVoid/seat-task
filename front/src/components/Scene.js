import React, { Component } from 'react'

class Scene extends Component {
    render() {
        let { width, height, left, top, spec: { name } } = this.props.params;

        let style = {
            width:  `${width}px`,
            height: `${height}px`,
            left:   `${left}px`,
            top:    `${top}px`,
        }

        return (
            <div className="Scene"
                 style ={ style }
            >
                { name }
            </div>
        )
    }
}

export default Scene
