import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Display extends Component {

    static propTypes = {
        myDisplay: PropTypes.string.isRequired
    }

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
