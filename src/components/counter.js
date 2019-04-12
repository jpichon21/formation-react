import React from 'react'

export default class Counter extends React.Component {
  constructor(props) {
    super(props)
    // Initialisation du "state" du composant
    this.state = {
      count: 0
    }
    // On "lie" les méthodes de la classe à l'instance
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }
  // Méthode de rendu du composant
  render() {
    return (
      <div>
      	Count: <span>{ this.state.count }</span>&nbsp;
        <button onClick={ this.increment }>+{this.props.intervalcount}</button>
        <button onClick={ this.decrement }>-{this.props.intervalcount}</button>
      </div>
    )
  }
  // La méthode increment() incrémente la valeur du compteur de 1
  // On passe un callback pour éviter un souci de désynchro
  increment() {
    this.setState(prevState => ({ count: prevState.count+this.props.intervalcount }))
  }
  // La méthode decrement() décrémente la valeur du compteur de 1
  decrement() {
    this.setState(prevState => ({ count: prevState.count-this.props.intervalcount }))
  }
}