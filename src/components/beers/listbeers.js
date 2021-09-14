import React, { useState, useEffect } from 'react'

export default function ListBeers({ beers, range, order }) {
    const [myRange, setMyRange] = useState([1, 5]);
    const listBeers = beers.
        filter((beer) => beer.abv >= myRange[0] && beer.abv <= myRange[1]).
        sort((a, b) => {
            if (order === 0) {
                return a.name > b.name ? 1 : -1;
            } else if (order === 1) {
                return a.abv - b.abv;
            }
        }).
        map((beer, index) => {
            return (
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 mt-3" key={index}>
                    <div className="card">
                        <img className="card-img-top d-block mx-auto" src={beer.image_url} alt="" style={{ width: '50px' }} />
                        <div className="card-body">
                            <h4 className="card-title">{beer.name}</h4>
                            <h4 className="card-text">{beer.abv}%</h4>
                            <p className="card-text">{beer.tagline}</p>
                        </div>
                    </div>
                </div>
            )
        })

    const myHook = () => {
        setMyRange(range);
    }

    useEffect(myHook, [range]);

    return (
        <div className="row">
            {listBeers}
        </div>
    )
}
