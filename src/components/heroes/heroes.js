import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Hero } from '../../model/hero'

export default class Heroes extends Component {

    constructor(props) {
        super(props)

        this.state = {
            heroes: [new Hero('Batman', 'dark knight'), new Hero('Superman', 'man of steel'), new Hero('Spiderman', '')],
            newHero: new Hero()
        }

    }

    handleChange(event) {
        if (event.target.name === 'name') {
            this.setState({
                newHero: { name: event.target.value, description: this.state.newHero.description }
            })
        } else if (event.target.name === 'description') {
            this.setState({
                newHero: { name: this.state.newHero.name, description: event.target.value }
            })
        }
    }

    handleClick() {
        this.setState({
            heroes: [...this.state.heroes, this.state.newHero],
            newHero: new Hero()
        })
    }

    render() {
        const listHeroes = this.state.heroes.map((hero, index) => {
            return <li key={index} className="list-group-item"><strong>{hero.name}</strong> <br /> {hero.description}</li>
        });
        return (
            <div className="container">
                <div className="form-group">
                    <label htmlFor="">Hero Name</label>
                    <input value={this.state.newHero.name} onChange={(event) => { this.handleChange(event) }} type="text" name="name" id="" className="form-control" placeholder="" aria-describedby="helpId" />
                    <label htmlFor="">Hero Description</label>
                    <input value={this.state.newHero.description} onChange={(event) => { this.handleChange(event) }} type="text" name="description" id="" className="form-control" placeholder="" aria-describedby="helpId" />
                    <button type="button" className="btn btn-primary mt-2" onClick={() => { this.handleClick() }}>Add</button>
                </div>

                <ul className="list-group mt-5">
                    {listHeroes}
                </ul>

            </div>
        )
    }
}
