import moment from 'moment';
import React, { Component, Fragment } from 'react';

import DateApod from './dateapod';
import ShowApod from './showapod';

export class Apod extends Component {

    constructor(props) {
        super(props)

        this.state = {
            date: moment(new Date()).format('YYYY-MM-DD'),
            dates: this.props.dates || [],
            data: this.props.data || [],
            searchString: ''
        }
    }

    newDate(date) {
        // this.setState({date: stringDate})
        this.setState({ dates: [...this.state.dates, date] });
        this.props.updateDates([...this.state.dates, date]);
    }

    newRange(dates) {
        this.setState({ dates: dates });
        this.doRequest(...dates);
    }

    doRequest(...dates) {
        console.log(JSON.stringify(dates));
        let url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
        if (dates.length === 2 && dates[1] !== null) {
            url = url +
                '&start_date=' + moment(dates[0]).format('YYYY-MM-DD') +
                '&end_date=' + moment(dates[1]).format('YYYY-MM-DD');;
        }
        else {
            url = url +
                '&start_date=' + moment(new Date()).format('YYYY-MM-DD') +
                '&end_date=' + moment(new Date()).format('YYYY-MM-DD');;
        }
        console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(JSON.stringify(data));
                this.setState({ data: data, dates: dates, apod: data });
            })
    }


    render() {

        let components = <Fragment></Fragment>
        console.log(JSON.stringify('data: ' + this.state.data));

        components = this.state.data.
            filter((data) => { return data.title.toLowerCase().search(this.state.searchString.toLowerCase()) > -1 }).
            map((data, index) =>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                    <ShowApod data={data} key={index} />
                </div>
            )

        return (
            <div className="container">
                <div class="form-group">
                </div>
                <DateApod updateRange={(dates) => { this.newRange(dates) }} dates={this.state.dates} />

                <div class="row">
                    {components}
                </div>



            </div>
        )
    }

}

export default Apod
