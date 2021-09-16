import React from 'react'

export default function TrivialCard({ card }) {
    const buttonList = card.answers.map((answer, index) => {
        return (
            <div class="d-grid gap-2 mb-1">
                <button key={index} className="btn btn-primary">
                    {answer}
                </button>
            </div>
        )
    })

    return (
        <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">{card.question}</h4>
                    {buttonList}
                </div>
            </div>
        </div>
    )
}
