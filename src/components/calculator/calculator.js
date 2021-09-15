import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Display from './display';
import Keyboard from './keyboard';

const INIT_STATE = 0;
const FIRST_FIGURE_STATE = 1;
const SECOND_FIGURE_STATE = 2;
const RESULT_STATE = 3;

export default class Calculator extends Component {

    constructor(props) {
        super(props)

        this.currentState = this.props.data.currentState || INIT_STATE;
        this.firstFigure = this.props.data.firstFigure || 0;
        this.secondFigure = this.props.data.secondFigure || 0;
        this.result = this.props.data.result || 0;
        this.operator = this.props.data.operator || '';

        this.state = {
            display: this.props.data.display || ''
        }
    }

    updateData(disp){
        this.setState({ display: disp });
        this.props.updateCalculator({
            firstFigure: this.firstFigure, 
            secondFigure:this.secondFigure, 
            result: this.result, 
            operator: this.operator,
            currentState: this.currentState,
            display: disp});
    }


    handleNumber(value) {
        switch (this.currentState) {
            case INIT_STATE:
                this.firstFigure = value;
                this.currentState = FIRST_FIGURE_STATE;
                this.updateData(this.state.display + value);
                break;
            case FIRST_FIGURE_STATE:
                this.firstFigure = this.firstFigure * 10 + value;
                this.updateData(this.state.display + value)
                break;
            case SECOND_FIGURE_STATE:
                this.secondFigure = this.secondFigure * 10 + value;
                this.updateData(this.state.display + value)
                break;
            case RESULT_STATE:
                this.firstFigure = value;
                this.secondFigure = 0;
                this.result = 0;
                this.operator = '';
                this.currentState = FIRST_FIGURE_STATE;
                this.updateData('' + value );
                break;

            default:
                break;
        }
    }

    calculateResult() {
        switch (this.operator) {
            case '+':
                return this.firstFigure + this.secondFigure;
            case '-':
                return this.firstFigure - this.secondFigure;
            case '*':
                return this.firstFigure * this.secondFigure;
            case '/':
                return this.firstFigure / this.secondFigure;
            default:
                break;
        }
    }

    handleSymbol(value) {
        switch (this.currentState) {
            case INIT_STATE:
                break;
            case FIRST_FIGURE_STATE:
                if (value === '+' || value === '-' || value === '*' || value === '/') {
                    this.operator = value;
                    this.currentState = SECOND_FIGURE_STATE;
                    this.updateData(this.state.display + value)
                }
                break;
            case SECOND_FIGURE_STATE:
                if (value === '=') {
                    this.result = this.calculateResult();
                    this.currentState = RESULT_STATE;
                    this.updateData(this.state.display + '=' + this.result)
                }
                break;
            case RESULT_STATE:
                if (value === '+' || value === '-' || value === '*' || value === '/') {
                    this.firstFigure = this.result;
                    this.secondFigure = 0;
                    this.result = 0;
                    this.operator = value;
                    this.currentState = SECOND_FIGURE_STATE;
                    this.updateData(this.firstFigure + this.operator)
                }
                break;

            default:
                break;
        }
    }

    handleClick(value) {
        if (typeof value === 'number') {
            this.handleNumber(value)
        } else if (typeof value === 'string') {
            this.handleSymbol(value)
        }

    }

    render() {
        return (
            <div className="container">
                <table >
                    <tbody>
                        <Display myDisplay={this.state.display} />
                        <Keyboard onSignal={(v) => { this.handleClick(v) }} />
                    </tbody>
                </table>
            </div>
        )
    }
}