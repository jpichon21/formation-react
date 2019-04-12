import React from 'react'

export default class Clock extends React.Component {

  constructor(props) {
    super(props)
    // Initialisation du "state" du composant
    this.state = {
      time: new Date()
    }
    // On appelle la méthode tick() du composant
    // toutes les secondes
    setInterval(this.tick.bind(this), 1000);
  }
	
  // Méthode de rendu du composant
  render() {
    return (
      <div>Time: { this.state.time.toString() }</div>
    )
  }
  
  // La méthode tick() met à jour le state du composant avec
  // la date courante
  tick() {
    this.setState({ time: new Date() });
  }

}