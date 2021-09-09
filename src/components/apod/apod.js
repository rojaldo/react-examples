import React, { Component } from 'react';
import moment from 'moment';
import DatePicker from "react-datepicker";
import YouTube from 'react-youtube';
import "react-datepicker/dist/react-datepicker.css";

export default class Apod extends Component {

    constructor(props) {
        super(props)

        this.state = {
            apod: {}
        }

        this.opts = {
            height: '390',
            width: '640',
            playerVars: {
              autoplay: 0,
            }
        }
    }

    componentDidMount() {
        fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    apod: data,
                    date: new Date()
                })
            })
    }

    setDate(date) {
        fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=' + moment(date).format('YYYY-MM-DD'))
        .then(response => response.json())
        .then(data => {
            this.setState({
                apod: data,
                date: date
            })
        })

    };
        
    render() {

        let media = <div></div>;

        if(this.state.apod.media_type === 'image') {
            media = <img class="d-block mx-auto h-100" src={this.state.apod.url} alt={this.state.apod.title} />
        }
        else if(this.state.apod.media_type === 'video') {
            console.log(this.state.apod.url.split('/')[4]);
            media = <YouTube class="d-block mx-auto" videoId={this.state.apod.url.split('/')[4]} opts={this.opts} />
        }

        return (
            <div class="container">
                <DatePicker selected={this.state.date} onChange={(date) => {this.setDate(date)}} />
                <div class="jumbotron">
                    <h1 class="display-3">{this.state.apod.title}</h1>
                    <p class="lead">{this.state.apod.date}</p>
                    {media}
                    <hr class="my-2" />
                    <p>{this.state.apod.explanation}</p>
                    <p class="lead">
                        <a class="btn btn-primary btn-lg" href={this.state.apod.hdurl} role="button">Download</a>
                    </p>
                </div>

            </div>
        )
    }
}
