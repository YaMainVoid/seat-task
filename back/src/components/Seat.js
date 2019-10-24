import React, { Component } from 'react'

class Seat extends Component {
    render() {
        let { width,
              height,
              content,
              type,
              margin,
              marginBottom } = this.props.params;

        let style = {
            width:        `${width}px`,
            height:       `${height}px`,
            margin:       `${margin}px`,
            marginBottom: `${marginBottom}px`,
        }
        
        return (
            <>
                {
                    type === 'seat' ? <div className="Seat Seat_default"
                                           style={ style }
                                      >{ content }</div> 
                                    : <div className="Seat Seat_row-info"
                                           style={style}
                                      >{ content }</div>
                }
            </>
        )
    }
}

export default Seat
