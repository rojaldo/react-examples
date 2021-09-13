import React, { useState, useEffect } from 'react'

export default function Beers(props) {

    const [query, setQuery] = useState('https://api.punkapi.com/v2/beers');
    const [beers, setBeers] = useState([]);

    const myFetch = () => {

        const fetchData = async () => {
            console.log('Fetching...');
            const response = await fetch(query);
            const data = await response.json();
            setBeers(data);
        };

        fetchData();
    };


    useEffect(myFetch, []);

    const listBeers = beers.map((beer, index) => {
        return (
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 mt-3" key={index}>
                <div className="card">
                    <img className="card-img-top d-block mx-auto" src={beer.image_url} alt="" style={{ width: '50px' }} />
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
