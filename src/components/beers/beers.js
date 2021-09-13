import React, { useState, useEffect } from 'react';
import ListBeers from './listbeers';
import SliderRange from './sliderrange';

export default function Beers(props) {

    const [query, setQuery] = useState('https://api.punkapi.com/v2/beers');
    const [beers, setBeers] = useState([]);
    const [range, setRange] = useState([1,5]);

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

    return (

        <div className="container">
            <SliderRange onRange={(range)=>{setRange(range)}}/>
            <ListBeers range={range} beers={beers}/>
        </div>
    )
}
