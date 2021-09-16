import React, { useState, useEffect } from 'react'

export default function TrivialCard({ card }) {

    const [myCard, setMyCard] = useState(card);
    const [answered, setanswered] = useState(card.responded)

    const handleClick = (answer, index) => {
        console.log('HandleClick: ' + index);
        let tmp = myCard;
        tmp.responded = true;
        tmp.answeredIndex = index;
        tmp.userAnswer = answer;
        setMyCard(tmp);
        setanswered(true);
    }

    const getClass = (index, answer) => {
        if (answer === myCard.rightAnswer) {
            return 'btn btn-success';
        } else if (index === myCard.answeredIndex) {
            return 'btn btn-danger'
        } else {
            return 'btn btn-secondary';
        }
    }

    let buttons = <div></div>;

    if (myCard.answers.length > 0) {
        buttons = myCard.answers.map((answer, index) => {
            if (myCard.responded) {
                return (
                    <div class="d-grid gap-2 mb-2">
                        <button type="button" name="" id="" className={getClass(index, answer)} disabled key={index} dangerouslySetInnerHTML={{__html:answer}}></button>
                    </div>);
            } else {
                return (
                    <div class="d-grid gap-2 mb-2">
                        <button type="button" name="" id="" className="btn btn-primary" key={index} onClick={() => { handleClick(answer, index) }} dangerouslySetInnerHTML={{__html:answer}}></button>
                    </div>);
            }
        }

        );
    }

    return (
        <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">{myCard.question}</h4>
                    {buttons}
                </div>
            </div>
        </div>
    )
}
