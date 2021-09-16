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

export default function Beers({beersProp, rangeProp, orderProp, updateBeers, updateRange, updateOrder}) {

    const [query, setQuery] = useState('https://api.punkapi.com/v2/beers');
    const [beers, setBeers] = useState(beersProp);
    const [range, setRange] = useState(rangeProp);
    const [order, setOrder] = useState(orderProp);

    const myFetch = () => {

        const fetchData = async () => {
            console.log('Fetching...');
            const response = await fetch(query);
            const data = await response.json();
            setBeers(data);
            updateBeers(data);
        };

        fetchData();
    };
    useEffect(myFetch, []);

    const handleChange = (event) => {
        setOrder(parseInt(event.target.value));
        updateOrder(parseInt(event.target.value));
    };



    const onRange = (range) => {
        setRange(range);
        updateRange(range);
    }

    return (

        <div className="container">
            <FormControl component="fieldset">
                <FormLabel component="legend">Order</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={order} onChange={handleChange}>
                    <FormControlLabel value={0} control={<Radio />} label="Alphabetical" />
                    <FormControlLabel value={1} control={<Radio />} label="Abv" />
                </RadioGroup>
            </FormControl>
            <SliderRange onRange={(range) => { onRange(range) }} range={range}/>
            <ListBeers range={range} order={order} beers={beers} />
        </div>
    )
}
