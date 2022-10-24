import React, {Component} from "react";

export default class PokemonCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            imgSrc: ""
        }
    }

    componentDidMount() {

    }

    render() {
        if (this.props.id === "") return;
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${this.props.id}/`)
        .then((response) => response.json())
        .then(data => this.setState({name: data.name}))
        .then(() => {
            return fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`);
            })
        .then(response => response.json())
        .then(data => this.setState({imgSrc: data.sprites.front_default}))
        .catch(e => console.log(e));
        return (<div>
            <img src={this.state.imgSrc} alt={this.state.name}/>
            <label>{this.state.name}</label>

        </div>)
    }
}