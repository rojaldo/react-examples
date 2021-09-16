import React, { useState, useEffect } from 'react';
import {CardModel} from '../../model/card';
import TrivialCard from './card';

export default function Trivial() {
    const [query, setQuery] = useState('https://opentdb.com/api.php?amount=10');
    const [data, setData] = useState({});
    const [cards, setCards] = useState([]);
    const myFetch = () => {
        const fetchData = async () => {
            const response = await fetch(query);
            const data = await response.json();
            setData(data);
            console.log(data);
            for (const jsonCard of data.results) {
                const newCard = new CardModel(jsonCard);
                setCards(cards.concat(newCard));
            }
            
        };
        fetchData();
    };
    useEffect(myFetch, []);
    
    const cardList = cards.map((card, index) => {
        return (
            <TrivialCard key={index} card={card} />
        );
    });

    return (
        <div class="container">
            
            <div class="row">
                {cardList}
            </div>
            

        </div>
    )
}
