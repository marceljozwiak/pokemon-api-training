import React, { Component } from "react";
import PokemonCard from "./PokemonCard"
import SearchInput from "./SearchInput"

export default class PokemonComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemonId: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({pokemonId: event.target.value});
    }

    render() {
        return (
            <div className="measure-narrow br3 bg-light-blue">
                <SearchInput searchChange={this.handleChange}/>

                <PokemonCard id={this.state.pokemonId}/>
            </div>
        )
    }
}