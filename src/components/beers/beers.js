import React, { Component } from 'react'

export default class Beers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            beers: []
        }
    }

    componentDidMount() {
        console.log('Beers mounted');
        fetch('https://api.punkapi.com/v2/beers')
            .then(response => response.json())
            .then(data => {
                console.log(JSON.stringify(data));
                this.setState({
                    beers: data
                })
            })
    }

    render() {
        const listBeers = this.state.beers.map((beer, index) => {
            return (
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 mt-3" key={index}>
                    <div className="card">
                        <img className="card-img-top d-block mx-auto" src={beer.image_url} alt="" style={{width: '50px'}}/>
                        <div className="card-body">
                            <h4 className="card-title">{beer.name}</h4>
                            <p className="card-text">{beer.tagline}</p>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div className="container">
                <div className="row">
                    {listBeers}
                </div>
            </div>
        )
    }
}
