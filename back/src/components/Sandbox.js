import React, { Component } from 'react';
import { connect } from 'react-redux';
import repeatedBgc from '../repeatedBgc.jpg';
import Table from './Table';
import Scene from './Scene';
import Seats from './Seats';
import id from '../utils/id';
import { addComponent, rmDrag } from '../api';

class Sandbox extends Component {
    constructor(props) {
        super(props);
        this.handleDragOver = this.handleDragOver.bind(this);
        this.handleDrop     = this.handleDrop.bind(this);
    }

    handleDrop(e) {
        e.preventDefault();

        let el;
        while(el = document.getElementById('__delete__')) {
            document.getElementById('root').removeChild(el)
        }

        let { type, width, height, offsetX, offsetY, spec } = this.props.currentDrag;

        let component = {
            id: id.next(),
            type,
            width,
            height,
            top: e.nativeEvent.offsetY - offsetY,
            left: e.nativeEvent.offsetX - offsetX,
            spec
        }

        switch(type) {
            case 'table': 
                this.props.addComponent(component)
                break;
            case 'scene': 
                // this.props.addComponent(component)
                break;
            case 'seats': 
                this.props.addComponent(component)
                break;
        }

        this.props.rmDrag();
    }

    handleDragOver(e) {
        e.preventDefault();
    }

    render() {
        const style = { background: `url(${repeatedBgc})` }
        return (
            <div className="Sandbox"
                 style={ style }
                 onDragOver={ this.handleDragOver }
                 onDrop={ this.handleDrop }
            >
                {
                    this.props.components.map(component => {
                        switch(component.type) {
                            case 'table':
                                return <Table params={component}
                                              key={component.id}
                                        />
                            case 'scene':
                                return <Scene params={component}
                                              key={component.id}
                                        />
                            case 'seats': 
                                return <Seats params={component}
                                              key={component.id}
                                        />
                        }
                    })
                }
            </div>
        )
    }
}

export default connect(
    state => ({
        components:  state.componentsStore,
        currentDrag: state.currentDragComponent
    }),
    { addComponent, rmDrag }
)(Sandbox)
