import React, {useState} from 'react';
import Slider from '@material-ui/core/Slider';

export default function SliderRange({onRange}) {

    const [value, setValue] = useState([1, 5]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        onRange(newValue);
    };

    return (
        <Slider
            min={0}
            max={60}
            step={0.1}
            value={value}
            onChange={(event, value) => { handleChange(event, value) }}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
        />
    )
}
