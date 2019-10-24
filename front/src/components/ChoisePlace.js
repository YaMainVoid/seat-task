import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComponents } from '../api';
import Table from './Table';
import Seats from './Seats';
import Scene from './Scene';

class ChoisePlace extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchComponents();
    }

    render() {
        let components = this.props.componentsStore;

        if (!components.length) {
            return <div className="ChoisePlace"></div>
        }

        let adaptiveContainerStyle = {
            width: `${components[0].width}px`,
            height: `${components[0].height}px`,
            position: 'relative'
        }
        
        return (
            <div className="ChoisePlace">
                <div className="ChoisePlace-AdaptiveContainer"
                     style={ adaptiveContainerStyle }
                >
                    {
                        components.map(component => {
                            switch(component.type) {
                                case 'table': 
                                    return <Table key={ component.id }
                                                  params={ component }    
                                            />
                                    break;
                                case 'seats': 
                                    return <Seats key={ component.id }
                                                  params={ component }    
                                            />
                                    break
                                case 'scene': 
                                    return <Scene key={ component.id }
                                                  params={ component }    
                                            />
                                    break;
                            }
                        })
                    }
                </div>
            </div>
        )
    }
}

export default connect(
    store => store,
    {
        fetchComponents
    }
)(ChoisePlace);
