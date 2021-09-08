import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

export default class Keyboard extends Component {
    static propTypes = {
        prop: PropTypes
    }

    handleClick(value) {
        this.props.onSignal(value)
    }

    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {
        return (
            <Fragment>
                <tr>
                    <td><button type="button" value="1" className="btn btn-primary btn-lg btn-block" onClick={() => { this.handleClick(1) }}> 1</button> </td>
                    <td><button type="button" value="2" className="btn btn-primary btn-lg btn-block" onClick={() => { this.handleClick(2) }}> 2</button> </td>
                    <td><button type="button" value="3" className="btn btn-primary btn-lg btn-block" onClick={() => { this.handleClick(3) }}> 3</button> </td>
                    <td><button type="button" value="/" className="btn btn-primary btn-lg btn-block" onClick={() => { this.handleClick('/') }}> /</button> </td>
                </tr>
                <tr>
                    <td><button type="button" value="4" className="btn btn-primary btn-lg btn-block" onClick={() => { this.handleClick(4) }}> 4</button> </td>
                    <td><button type="button" value="5" className="btn btn-primary btn-lg btn-block" onClick={() => { this.handleClick(5) }}> 5</button> </td>
                    <td><button type="button" value="6" className="btn btn-primary btn-lg btn-block" onClick={() => { this.handleClick(6) }}> 6</button> </td>
                    <td><button type="button" value="-" className="btn btn-primary btn-lg btn-block" onClick={() => { this.handleClick('-') }}> -</button> </td>
                </tr>
                <tr>
                    <td><button type="button" value="7" className="btn btn-primary btn-lg btn-block" onClick={() => { this.handleClick(7) }}> 7</button> </td>
                    <td><button type="button" value="8" className="btn btn-primary btn-lg btn-block" onClick={() => { this.handleClick(8) }}> 8</button> </td>
                    <td><button type="button" value="9" className="btn btn-primary btn-lg btn-block" onClick={() => { this.handleClick(9) }}> 9</button> </td>
                    <td><button type="button" value="+" className="btn btn-primary btn-lg btn-block" onClick={() => { this.handleClick('+') }}> +</button> </td>
                </tr>
                <tr>

                    <td>
                        <div className="d-grid gap-2">
                            <button type="button" value="." className="btn btn-primary btn-lg btn-block" onClick={() => { this.handleClick('.') }}> .</button>
                        </div></td>
                    <td><button type="button" value="0" className="btn btn-primary btn-lg btn-block" onClick={() => { this.handleClick(0) }}> 0</button> </td>
                    <td><button type="button" value="=" className="btn btn-primary btn-lg btn-block" onClick={() => { this.handleClick('=') }}> =</button> </td>
                    <td><button type="button" value="*" className="btn btn-primary btn-lg btn-block" onClick={() => { this.handleClick('*') }}> *</button> </td>

                </tr>

            </Fragment>
        )
    }
}
