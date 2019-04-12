import React from 'react'
export default class Clock extends React.Component {

  constructor(props) {
    super(props)
    // Initialisation du "state" du composant
    this.state = {
      time: new Date(),
      foo: 'bar',
    }
    // On appelle la méthode tick() du composant
    // toutes les secondes, le bind sert à définir le contexte !
    setInterval(this.tick.bind(this), props.intervalcount);
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
    this.setState({ time: new Date()  });
  }

}