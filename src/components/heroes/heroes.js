import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Hero } from '../../model/hero'
import HeroForm from './heroform'
import HeroesList from './heroeslist'

export default class Heroes extends Component {

    constructor(props) {
        super(props)

        this.state = {
            heroes: [new Hero('Batman', 'dark knight'), new Hero('Superman', 'man of steel'), new Hero('Spiderman', '')]
        }

    }

    handleAddHero(hero) {
        this.setState({
            heroes: [...this.state.heroes, hero]
        })
    }

    removeHero(index) {
        let aux = this.state.heroes;
        aux.splice(index,1);
        this.setState({
            heroes: aux
        })
    }

    render() {

        return (
            <div className="container">
                <HeroForm onAdd={(hero)=>{this.handleAddHero(hero)}}/>
                <HeroesList heroes={this.state.heroes} removeHero={(idx)=>{this.removeHero(idx)}}/>
            </div>
        )
    }
}
