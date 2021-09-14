import React, { useState, useEffect } from 'react';
import ListBeers from './listbeers';
import SliderRange from './sliderrange';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const ALPHABETICAL = 0;
const ABV = 1;

export default function Beers(props) {

    const [query, setQuery] = useState('https://api.punkapi.com/v2/beers');
    const [beers, setBeers] = useState([]);
    const [range, setRange] = useState([1, 5]);
    const [order, setOrder] = useState(ALPHABETICAL);

    const myFetch = () => {

        const fetchData = async () => {
            console.log('Fetching...');
            const response = await fetch(query);
            const data = await response.json();
            setBeers(data);
        };

        fetchData();
    };

    const handleChange = (event) => {
        setOrder(parseInt(event.target.value));
        console.log(parseInt(event.target.value));
    };


    useEffect(myFetch, []);

    return (

        <div className="container">
            <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={order} onChange={handleChange}>
                    <FormControlLabel value={0} control={<Radio />} label="Alphabetical" />
                    <FormControlLabel value={1} control={<Radio />} label="Abv" />
                </RadioGroup>
            </FormControl>
            <SliderRange onRange={(range) => { setRange(range) }} />
            <ListBeers range={range} order={order} beers={beers} />
        </div>
    )
}
