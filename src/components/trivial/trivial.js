import React, { useState, useEffect } from 'react';
import {CardModel} from '../../model/card';
import TrivialCard from './card';

export default function Trivial() {
    const [query, setQuery] = useState('https://opentdb.com/api.php?amount=10');
    const [data, setData] = useState({});
    const [cards, setCards] = useState([]);
    const [score, setScore] = useState(0)
    const myFetch = () => {
        const fetchData = async () => {
            const response = await fetch(query);
            const data = await response.json();
            setData(data);
            console.log(data);
            let array = []
            for (const jsonCard of data.results) {
                const newCard = new CardModel(jsonCard);
                array = [...array, newCard];
            }
            setCards(array);
            
        };
        fetchData();
    };
    useEffect(myFetch, []);

    const processAnswer = (rightAnswered) => {
        if(rightAnswered){
            setScore(score + 2);
        }else {
            setScore(score - 1);
        }
    }
    
    const cardList = cards.map((card, index) => {
        return (
            <TrivialCard key={index} card={card} onAnswered={(rightAnswered)=>{processAnswer(rightAnswered)}}/>
        );
    });

    return (
        <div class="container">
            <h2>{score}<span class="badge badge-primary">New</span></h2>
            <div class="row">
                {cardList}
            </div>
            

        </div>
    )
}
