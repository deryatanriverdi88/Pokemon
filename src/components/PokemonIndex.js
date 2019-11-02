import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonIndex extends React.Component {

  state ={
    pokemons: [],
    searchTerm: ''
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemonObject => {
      this.setState({
        pokemons: pokemonObject
      })
    })
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ searchTerm: value })
  }

  render() {

    const desiredPokemon = this.state.pokemons.filter(p =>
      p.name.includes(this.state.searchTerm)
    )
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search onSearchChange={_.debounce(this.handleSearchChange, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={desiredPokemon}/>
      </div>
    )
  }
}

export default PokemonIndex
