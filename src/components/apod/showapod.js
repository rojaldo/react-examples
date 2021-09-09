import React, { Component } from 'react'
import YouTube from 'react-youtube';
import moment from 'moment';

export default class ShowApod extends Component {
    constructor(props) {
        super(props)

        this.state = {
            apod: {},
            date: moment(new Date()).format('YYYY-MM-DD')
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
        fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=' + this.state.date)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    apod: data,
                    date: this.props.date
                })
            })
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (this.state.date !== nextProps.date)
    }



    componentDidUpdate(prevProps, prevState) {
        fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=' + this.props.date)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    apod: data,
                    date: this.props.date
                })
            })
    }


    render() {
        let media = <div></div>;

        if (this.state.apod.media_type === 'image') {
            media = <img class="d-block mx-auto h-100" src={this.state.apod.url} alt={this.state.apod.title} />
        }
        else if (this.state.apod.media_type === 'video') {
            console.log(this.state.apod.url.split('/')[4]);
            media = <YouTube class="d-block mx-auto" videoId={this.state.apod.url.split('/')[4]} opts={this.opts} />
        }
        return (
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

        )
    }
}
