import React, { Component } from 'react'

export default class HeroesList extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    removeHero(index){
        this.props.removeHero(index);
    }

    render() {
        const listHeroes = this.props.heroes.map((hero, index) => {
            return <li key={index} className="list-group-item"><strong>{hero.name}</strong> <br /> {hero.description}<br /> <button type="button" className="btn btn-danger" onClick={()=>{this.removeHero(index)}}>remove</button></li>
        });
        return (
            <ul className="list-group mt-5">
                {listHeroes}
            </ul>
        )
    }
}
