import React, { Component, Fragment } from 'react';
import { Hero } from '../../model/hero';

export default class HeroForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
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
        this.props.onAdd(this.state.newHero);
        this.setState({
            newHero: new Hero()
        })
    }

    render() {
        return (
            <Fragment>
                <div className="form-group">
                    <label htmlFor="">Hero Name</label>
                    <input value={this.state.newHero.name} onChange={(event) => { this.handleChange(event) }} type="text" name="name" id="" className="form-control" placeholder="" aria-describedby="helpId" />
                    <label htmlFor="">Hero Description</label>
                    <input value={this.state.newHero.description} onChange={(event) => { this.handleChange(event) }} type="text" name="description" id="" className="form-control" placeholder="" aria-describedby="helpId" />
                    <button type="button" className="btn btn-primary mt-2" onClick={() => { this.handleClick() }}>Add</button>
                </div>
            </Fragment>
        )
    }
}
