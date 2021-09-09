import React, { Component } from 'react'

export default class Apod extends Component {

    constructor(props) {
        super(props)

        this.state = {
            apod: {}
        }
    }

    componentDidMount() {
        fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    apod: data
                })
            })
    }

    render() {
        return (
            <div class="container">
                <div class="jumbotron">
                    <h1 class="display-3">{this.state.apod.title}</h1>
                    <p class="lead">{this.state.apod.date}</p>
                    <img class="d-block mx-auto h-100" src={this.state.apod.url} alt={this.state.apod.title}/>
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
