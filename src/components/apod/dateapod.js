import React, { Component } from 'react'
import moment from 'moment';
import DatePicker from "react-datepicker";

export default class DateApod extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             date: new Date()
        }
    }

    setDate(date) {
        this.setState({
            date: date
        })
        this.props.onDate(moment(date).format('YYYY-MM-DD'));

    };
    
    render() {
        return (
            <DatePicker selected={this.state.date} onChange={(date) => {this.setDate(date)}} />
        )
    }
}
