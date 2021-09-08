import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Display extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    render() {
        return (
            <tr>
                <td colSpan="4">{this.props.myDisplay}</td>
            </tr>
        )
    }
}

Display.propTypes = {
    myDisplay: PropTypes.string.isRequired
  };
