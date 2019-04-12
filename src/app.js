import { Component, Fragment } from 'react'
import Clock from './components/clock'
import Counter from './components/counter'
import { hot } from 'react-hot-loader'

class App extends Component {
  render () {
      //on render le component Clock 
    return(
        <Fragment>
            <h1> Hello world ! </h1>
            <Counter intervalcount={1000}></Counter>
            <Clock /> 
            <Clock />
            <Clock />
            <Clock />
            <Clock />
        </Fragment>
    )
  }
}

export default hot(module)(App)