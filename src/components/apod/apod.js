import React, { Component } from 'react';


import "react-datepicker/dist/react-datepicker.css";
import ShowApod from './showapod';
import DateApod from './dateapod';

export default class Apod extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dateString: ''
        }

    }

    updateDate(dateObj) {
        this.setState({
            date: dateObj
        })
    };

        
    render() {

        return (
            <div class="container">
                <DateApod onDate={(date)=>{this.updateDate(date)}}/>
                <ShowApod date={this.state.date}/>
            </div>
        )
    }
}
