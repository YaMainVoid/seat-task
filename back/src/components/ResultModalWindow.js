import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ResultModalWindow extends Component {
    render() {
        const successBgc = '#14cc1b',
              failedBgc  = '#e64539',
              sendingBgc = '#0f5fff'

        let style = {}

        let { message, state } = this.props.info;

        switch(state) {
            case '':
                style = {
                    display: 'none'
                }
                break;
            // case 'sending':
            //     style = {
            //         backgroundColor: sendingBgc
            //     }
            //     break;
            case 'success': 
                style = {
                    backgroundColor: successBgc
                }
                break;
            case 'failed': 
                style = {
                    backgroundColor: failedBgc
                }
                break;
        }

        return (
            <div className="ResultModalWindow"
                 style={ style }    
            >
                { message }
            </div>
        )
    }
}

export default connect(state => ({
    info: state.resultModalWindowMainpulator
})
)(ResultModalWindow);
