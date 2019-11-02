import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state ={
    front: true
  }
  render() {
    // console.log(this.props.pokemon)

    const { name, stats, sprites, isClicked } = this.props.pokemon

    const hp = this.props.pokemon.stats.find(s => s.name === 'hp').value
    return (
      <Card onClick={() => {this.setState({front: !this.state.front})}}>
        {this.state.front ?
        <div>
          <div className="image">
            <img alt="oh no!" src={sprites.front} />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp} hp
            </span>
          </div>
        </div>
        :
        null
        }
      </Card>
    )
  }
}

export default PokemonCard
