import React, { Component } from 'react'
import moment from 'moment';
import DatePicker from "react-datepicker";

export default class DateApod extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date: {
                startDate: new Date(),
                endDate: null
            }
        }
    }

    setDate(dateArray) {
        const aux = {startDate: dateArray[0], endDate: dateArray[1]};
        console.log(JSON.stringify(aux));
        this.setState({
            date: aux
        })
        this.props.onDate(aux);

    };

    render() {
        return (
            <DatePicker
                selected={this.state.date.startDate}
                onChange={(date) => { this.setDate(date) }}
                startDate={this.state.date.startDate}
                endDate={this.state.date.endDate}
                selectsRange
                inline
            />
            // <DatePicker selected={this.state.date} onChange={(date) => {this.setDate(date)}} />
        )
    }
}
