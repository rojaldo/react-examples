import React, { Component } from 'react';
import moment from 'moment';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export class DateApod extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: {},
            date: new Date(),
            startDate: this.props.dates[0],
            endDate: this.props.dates[1]
        }
    }

    onChange(dates) {
        console.log(JSON.stringify(dates));
        this.setState({ startDate: dates[0], endDate: dates[1] })
        this.props.updateRange(dates);
    }

    setStartDate(date) {
        console.log(date);
        this.setState({ date: date })
        this.props.setDate(moment(date).format('YYYY-MM-DD'));
    }

    render() {
        return (
            <div class="container">
                <DatePicker
                    selected={this.state.startDate}
                    onChange={(dates) => { this.onChange(dates) }}
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    selectsRange
                    inline
                />

            </div>
            // <DatePicker selected={this.state.date} onChange={date => { this.setStartDate(date) }} />
        )
    }
}

export default DateApod
