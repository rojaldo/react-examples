import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Heroes extends Component {
    static propTypes = {
        prop: PropTypes
    }

    constructor(props) {
        super(props)

        this.state = {
            heroes: ['Batman', 'Superman', 'Spiderman'],
            newHero: ''
        }

    }

    handleChange(event){
        this.setState({
            newHero: event.target.value
        })
    }

    handleClick(){
        this.setState({
            heroes: [...this.state.heroes, this.state.newHero],
            newHero: ''
        })
    }

    render() {
        const listHeroes = this.state.heroes.map((hero, index) => {
            return <li key={index} className="list-group-item">{hero}</li>
        });
        return (
            <div className="container">
                <div className="form-group">
                  <label htmlFor="">New Hero</label>
                  <input value={this.state.newHero} onChange={(event)=>{this.handleChange(event)}} type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <button type="button" className="btn btn-primary mt-2" onClick={()=>{this.handleClick()}}>Añadir</button>
                </div>

                <ul className="list-group mt-5">
                    {listHeroes}
                </ul>

            </div>
        )
    }
}
