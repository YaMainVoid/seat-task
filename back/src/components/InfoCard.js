import React, { Component } from 'react'

class InfoCard extends Component {
    render() {
        return (
            <div className="InfoCard">
                <div className="InfoCard-Title">{this.props.children}</div>
                <div className="InfoCard-Question">?</div>
            </div>
        )
    }
}

export default InfoCard
